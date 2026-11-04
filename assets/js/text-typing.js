/* Independent typing decoration. Original text nodes, layout and semantics stay intact. */
(() => {
  'use strict';
  if (window.ArthonTyping) return;
  const selectors = '#hero-heading, .hero-lead, #projects-heading, #about-heading, #cap-heading, #journey-heading, .journey-intro > p, #contact-heading, .contact-lead';
  let active = false;
  window.ArthonTyping = Object.freeze({ stop, get active() { return active; } });
  if (new URLSearchParams(window.location.search).get('swarm') === '0' ||
      !window.CSS?.highlights || !window.Highlight || !window.IntersectionObserver) return;

  const states = [...document.querySelectorAll(selectors)].map((target, index) => {
    const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
    const parts = [];
    let node;
    let length = 0;
    while ((node = walker.nextNode())) {
      // Code-point offsets preserve accented characters and surrogate pairs.
      const offsets = [0];
      for (const character of node.textContent) offsets.push(offsets.at(-1) + character.length);
      parts.push({ node, offsets, start: length });
      length += offsets.length - 1;
    }
    return { target, parts, length, key: `arthon-typing-${index}`, running: false, inside: false, shown: -1, started: null, elapsed: 0 };
  });
  const style = document.createElement('style');
  style.textContent = states.map(s => `::highlight(${s.key}){color:transparent;text-shadow:none}`).join('\n');
  document.head.append(style);
  const host = document.createElement('div');
  host.setAttribute('aria-hidden', 'true');
  const shadow = host.attachShadow({ mode: 'open' });
  const overlayStyle = document.createElement('style');
  overlayStyle.textContent = ':host{position:fixed;inset:0;pointer-events:none;z-index:46;contain:strict}.box{position:absolute;border:1px solid #a67cda;box-sizing:border-box;pointer-events:none}.caret{position:absolute;width:2px;background:#a67cda;pointer-events:none}';
  shadow.append(overlayStyle);
  states.forEach(s => {
    s.box = document.createElement('div');
    s.box.setAttribute('class', 'box');
    s.caret = document.createElement('div');
    s.caret.setAttribute('class', 'caret');
    s.box.style.display = s.caret.style.display = 'none';
    shadow.append(s.box, s.caret);
  });
  document.body.append(host);
  let frame = 0;
  active = true;

  function restore(s) {
    window.CSS.highlights.delete(s.key);
    s.running = false;
    s.box.style.display = s.caret.style.display = 'none';
    s.target.dataset.typingState = 'complete';
  }
  function reveal(s, count) {
    const ranges = [];
    for (const part of s.parts) {
      const local = Math.max(0, Math.min(part.offsets.length - 1, count - part.start));
      if (local < part.offsets.length - 1) {
        const range = document.createRange();
        range.setStart(part.node, part.offsets[local]);
        range.setEnd(part.node, part.node.textContent.length);
        ranges.push(range);
      }
    }
    window.CSS.highlights.set(s.key, new window.Highlight(...ranges));
    s.shown = count;
  }
  function geometry(s) {
    const rect = s.target.getBoundingClientRect();
    Object.assign(s.box.style, { display: 'block', left: `${rect.left - 7}px`, top: `${rect.top - 5}px`, width: `${rect.width + 14}px`, height: `${rect.height + 10}px` });
    let position = rect;
    if (s.shown > 0) {
      const part = s.parts.find(p => s.shown > p.start && s.shown <= p.start + p.offsets.length - 1);
      if (part) {
        const offset = s.shown - part.start;
        const range = document.createRange();
        range.setStart(part.node, part.offsets[offset - 1]);
        range.setEnd(part.node, part.offsets[offset]);
        position = range.getBoundingClientRect();
      }
    }
    Object.assign(s.caret.style, { display: 'block', left: `${s.shown > 0 ? position.right + 1 : rect.left}px`, top: `${position.top}px`, height: `${Math.max(12, position.height)}px`, opacity: Math.floor(s.elapsed / 450) % 2 ? '0' : '1' });
  }
  function draw(now) {
    frame = 0;
    try {
      for (const s of states) {
        if (!s.running) continue;
        if (s.started === null) s.started = now;
        s.elapsed += Math.max(0, now - s.started);
        s.started = now;
        const duration = Math.min(3600, Math.max(1000, s.length * 35));
        const progress = Math.max(0, (s.elapsed - 350) / duration);
        if (progress >= 1) { restore(s); continue; }
        const count = Math.floor(progress * s.length);
        if (count !== s.shown) reveal(s, count);
        geometry(s);
      }
      schedule();
    } catch (error) {
      stop();
      console.warn('Digitação encerrada; texto original preservado.', error);
    }
  }
  function schedule() {
    if (!frame && active && !document.hidden && states.some(s => s.running)) frame = window.requestAnimationFrame(draw);
  }
  const observer = new window.IntersectionObserver(entries => {
    for (const entry of entries) {
      const s = states.find(item => item.target === entry.target);
      if (!s) continue;
      if (!entry.isIntersecting) { s.inside = false; restore(s); continue; }
      if (s.inside) continue;
      s.inside = true;
      if (!s.length) continue;
      s.running = true;
      s.started = null;
      s.elapsed = 0;
      s.shown = -1;
      s.target.dataset.typingState = 'typing';
      reveal(s, 0);
      schedule();
    }
  }, { rootMargin: '-80px 0px -8% 0px', threshold: 0 });
  states.forEach(s => observer.observe(s.target));
  function visibility() {
    window.cancelAnimationFrame(frame);
    frame = 0;
    states.forEach(s => { s.started = null; });
    schedule();
  }
  function keydown(event) { if (event.key === 'Escape') stop(); }
  function stop() {
    if (!active) return;
    active = false;
    window.cancelAnimationFrame(frame);
    frame = 0;
    observer.disconnect();
    states.forEach(restore);
    host.remove();
    style.remove();
    document.removeEventListener('visibilitychange', visibility);
    document.removeEventListener('keydown', keydown);
    window.removeEventListener('pagehide', stop);
  }
  document.addEventListener('visibilitychange', visibility);
  document.addEventListener('keydown', keydown);
  window.addEventListener('pagehide', stop);
})();
