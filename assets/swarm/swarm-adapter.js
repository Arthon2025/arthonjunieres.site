/* Independent decorative animation for arthonjunieres.site.
 * No code or assets from swarm-cursors / swarm-site are included.
 * Automatic on page load by project-owner request; ?swarm=0 disables it.
 */
(() => {
  'use strict';
  if (window.ArthonSwarm) return;

  const palette = ['#c4a0ff', '#e7d5ff', '#8edbd2'];
  const selectors = '.hero h1, .visual-frame, .project, .cap-card, .about-facts, .timeline-item, .contact-card';
  let session = null;

  function stop() {
    if (!session) return;
    const old = session;
    session = null;
    window.cancelAnimationFrame(old.frame);
    old.cleanups.forEach(cleanup => cleanup());
    old.host.remove();
  }

  function start() {
    if (session) return true;
    const host = document.createElement('div');
    const shadow = host.attachShadow({ mode: 'open' });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return false;
    const style = document.createElement('style');
    // Inline isolated CSS avoids a stylesheet race and works from file:// too.
    style.textContent = `
      :host{all:initial;position:fixed;inset:0;z-index:45;pointer-events:none;display:block;contain:strict}
      canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
    `;
    canvas.setAttribute('aria-hidden', 'true');
    host.setAttribute('aria-hidden', 'true');
    shadow.append(style, canvas);
    const current = {
      host, shadow, canvas, context, cleanups: [], frame: 0,
      dirty: true, scrollGeneration: 0,
      width: 0, height: 0, tasks: [], seen: new WeakMap(),
      targets: [...document.querySelectorAll(selectors)],
      mouse: null, time: 0, lastTick: null, refreshAt: 0,
      agents: Array.from({ length: 5 }, (_, i) => ({ x: -40 - i * 25, y: 180 + i * 45 }))
    };
    session = current;

    function listen(target, event, handler, options) {
      target.addEventListener(event, handler, options);
      current.cleanups.push(() => target.removeEventListener(event, handler, options));
    }
    function resize() {
      current.width = window.innerWidth;
      current.height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(current.width * ratio);
      canvas.height = Math.round(current.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      current.dirty = true;
    }
    function invalidate() {
      // Coalesce every scroll burst into the next paint. Active tasks are never reset;
      // completed targets become eligible once per newer scroll generation.
      current.scrollGeneration++;
      current.dirty = true;
    }
    function visibility() {
      window.cancelAnimationFrame(current.frame);
      current.frame = 0;
      current.lastTick = null;
      if (!document.hidden && session === current) current.frame = window.requestAnimationFrame(draw);
    }
    function refresh() {
      current.tasks = current.tasks.filter(task => task.end > current.time);
      for (const target of current.targets) {
        if (current.seen.get(target) === current.scrollGeneration || current.tasks.some(task => task.target === target)) continue;
        const rect = target.getBoundingClientRect();
        const visible = rect.width > 0 && rect.height > 0 && rect.bottom > 100 && rect.top < current.height - 40;
        if (visible && current.tasks.length < 5) {
          current.seen.set(target, current.scrollGeneration);
          const begin = current.time + current.tasks.length * 260;
          current.tasks.push({ target, rect, begin, end: begin + 2400 });
        }
      }
      current.tasks.forEach(task => { task.rect = task.target.getBoundingClientRect(); });
      current.dirty = false;
      current.refreshAt = current.time + 240;
    }
    // Trace the perimeter without painting over, hiding or cloning any content.
    function perimeter(rect, progress, color) {
      const x = rect.left - 5, y = rect.top - 5;
      const w = rect.width + 10, h = rect.height + 10;
      let distance = (w + h) * 2 * progress;
      const corners = [[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]];
      let point = corners[0];
      context.beginPath();
      context.moveTo(...point);
      for (let i = 1; i < corners.length && distance > 0; i++) {
        const next = corners[i];
        const length = Math.abs(next[0] - point[0]) + Math.abs(next[1] - point[1]);
        const fraction = Math.min(1, distance / length);
        const end = [point[0] + (next[0] - point[0]) * fraction, point[1] + (next[1] - point[1]) * fraction];
        context.lineTo(...end);
        distance -= length;
        point = end;
      }
      context.strokeStyle = color;
      context.lineWidth = 1;
      context.stroke();
      return { x: point[0], y: point[1] };
    }
    // A simple geometric pointer drawn here, not an imported cursor asset.
    function pointer(x, y, color) {
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + 4, y + 18);
      context.lineTo(x + 8, y + 12);
      context.lineTo(x + 16, y + 10);
      context.closePath();
      context.fillStyle = color;
      context.fill();
      context.strokeStyle = '#100d19';
      context.lineWidth = 1.5;
      context.stroke();
    }
    function draw(now) {
      if (session !== current) return;
      try {
        const elapsed = current.lastTick === null ? 16 : Math.max(0, Math.min(50, now - current.lastTick));
        current.lastTick = now;
        current.time += elapsed;
        context.clearRect(0, 0, current.width, current.height);
        if (current.dirty || current.time >= current.refreshAt) refresh();
        const tasks = current.tasks.filter(task => task.begin <= current.time && task.end > current.time);
        current.agents.forEach((agent, i) => {
          const color = palette[i % palette.length];
          const task = tasks[i];
          let destination;
          if (task) {
            const progress = Math.min(1, (current.time - task.begin) / 1700);
            context.globalAlpha = Math.min(0.65, (task.end - current.time) / 700);
            destination = perimeter(task.rect, progress, color);
          } else {
            const angle = current.time / 1600 + i * Math.PI * 2 / current.agents.length;
            const anchor = current.mouse || { x: current.width * 0.8, y: current.height * 0.4 };
            destination = { x: anchor.x + Math.cos(angle) * (60 + i * 9), y: anchor.y + Math.sin(angle) * 45 };
            context.globalAlpha = 0.65;
          }
          agent.x += (destination.x - agent.x) * (1 - Math.exp(-elapsed / 130));
          agent.y += (destination.y - agent.y) * (1 - Math.exp(-elapsed / 130));
          pointer(agent.x, agent.y, color);
        });
        context.globalAlpha = 1;
        current.frame = window.requestAnimationFrame(draw);
      } catch (error) {
        stop();
        console.warn('Animação decorativa encerrada; página original preservada.', error);
      }
    }
    try {
      resize();
      listen(window, 'resize', resize, { passive: true });
      listen(window, 'scroll', invalidate, { passive: true });
      listen(window, 'pointermove', event => { current.mouse = { x: event.clientX, y: event.clientY }; }, { passive: true });
      listen(document, 'pointerleave', () => { current.mouse = null; });
      listen(document, 'keydown', event => { if (event.key === 'Escape') stop(); });
      listen(document, 'visibilitychange', visibility);
      listen(window, 'pagehide', stop);
      document.body.append(host);
      visibility();
      return true;
    } catch (error) {
      stop();
      console.warn('Não foi possível iniciar a animação decorativa.', error);
      return false;
    }
  }

  window.ArthonSwarm = Object.freeze({ start, stop, get active() { return session !== null; } });
  if (new URLSearchParams(window.location.search).get('swarm') !== '0') {
    start();
  }
})();
