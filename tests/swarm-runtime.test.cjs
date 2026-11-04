'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
function setup({ search = '', reduced = false, coarse = false, noContext = false } = {}) {
  const events = new Map();
  const frames = new Map();
  const media = new Map();
  const nodes = [];
  let id = 0;
  let strokes = 0;
  const ctx = new Proxy({}, { get: (_, key) => key === 'stroke' ? () => { strokes++; } : key === 'measureText' ? () => ({ width: 20 }) : () => {} , set: () => true });
  const make = tag => ({ tag, style: {}, children: [], isConnected: true, setAttribute() {}, addEventListener(type, fn) { this[type] = fn; }, append(...items) { this.children.push(...items); }, remove() { this.isConnected = false; }, attachShadow() { return this; }, getContext() { return noContext ? null : ctx; }, getBoundingClientRect() { return { left: 30, top: 120, width: 240, height: 160, right: 270, bottom: 280 }; } });
  const target = make('article');
  const doc = { hidden: false, body: { append(node) { nodes.push(node); } }, createElement: make, querySelectorAll: () => [target], addEventListener(type, fn) { events.set(type, fn); }, removeEventListener(type) { events.delete(type); } };
  const win = { location: { search }, innerWidth: 1440, innerHeight: 900, devicePixelRatio: 2, matchMedia(query) { if (!media.has(query)) media.set(query, { matches: query.includes('reduced') ? reduced : coarse, addEventListener(type, fn) { this.change = fn; }, removeEventListener() { this.change = null; } }); return media.get(query); }, addEventListener(type, fn) { events.set(type, fn); }, removeEventListener(type) { events.delete(type); }, requestAnimationFrame(fn) { frames.set(++id, fn); return id; }, cancelAnimationFrame(key) { frames.delete(key); } };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/swarm/swarm-adapter.js'), 'utf8'), { window: win, document: doc, URLSearchParams, console, Math, performance: { now: () => 0 } }, { filename: path.join(__dirname, '../assets/swarm/swarm-adapter.js') });
  return { win, doc, events, frames, nodes, media, get strokes() { return strokes; }, tick(time = 500) { const pending = [...frames.values()]; frames.clear(); pending.forEach(fn => fn(time)); } };
}
test('URL normal inicia animação automaticamente', () => { const s = setup(); assert.equal(s.nodes.length, 1); assert.equal(s.frames.size, 1); assert.equal(s.win.ArthonSwarm.active, true); });
test('swarm=0 desativa completamente a inicialização', () => { const s=setup({search:'?swarm=0'}); assert.equal(s.nodes.length,0); assert.equal(s.frames.size,0); });
test('movimento reduzido inicia automaticamente sem aviso ou botão', () => { const s=setup({reduced:true}); assert.equal(s.win.ArthonSwarm.active,true); assert.equal(s.nodes.length,1); assert.ok(s.nodes[0].children.every(n=>n.tag!=='button'&&n.tag!=='section')); });
test('opt-in cria camada, desenha e encerra sem listeners ou frames residuais', () => { const s = setup({ search: '?swarm=1' }); assert.equal(s.win.ArthonSwarm.active, true); s.tick(); s.win.ArthonSwarm.stop(); assert.equal(s.frames.size, 0); assert.equal(s.events.size, 0); assert.ok(s.nodes.every(n => !n.isConnected)); });
test('Escape encerra e chamadas repetidas são idempotentes', () => { const s = setup(); assert.equal(s.win.ArthonSwarm.start(), true); assert.equal(s.win.ArthonSwarm.start(), true); assert.equal(s.nodes.length, 1); s.events.get('keydown')({ key: 'Escape' }); assert.equal(s.win.ArthonSwarm.active, false); s.win.ArthonSwarm.stop(); assert.equal(s.win.ArthonSwarm.start(), true); });
test('touch também inicia sem controles', () => { const s=setup({coarse:true}); assert.equal(s.win.ArthonSwarm.active,true); assert.equal(s.nodes.length,1); });
test('aba oculta pausa e retorna com um único frame', () => { const s = setup({ search: '?swarm=1' }); s.doc.hidden = true; s.events.get('visibilitychange')(); assert.equal(s.frames.size, 0); s.doc.hidden = false; s.events.get('visibilitychange')(); assert.equal(s.frames.size, 1); });
test('resize e scroll atualizam geometria e pagehide limpa', () => { const s = setup({ search: '?swarm=1' }); s.events.get('resize')(); s.events.get('scroll')(); s.tick(900); s.events.get('pagehide')(); assert.equal(s.events.size, 0); });
test('traçado avança por todo o perímetro e ponteiro acompanha mouse', () => { const s = setup({ search: '?swarm=1' }); s.events.get('pointermove')({clientX:300,clientY:200}); for(let i=0;i<150;i++) s.tick(i*40); s.events.get('pointerleave')(); s.tick(6100); s.win.ArthonSwarm.stop(); });
test('camada ativa não contém botão de encerramento', () => { const s=setup(); assert.ok(s.nodes[0].children.every(n=>n.tag!=='button')); });
test('rolagem em ambas direções repete retângulos já concluídos', () => {
  const s=setup(); let now=0;
  const advance=n=>{for(let i=0;i<n;i++){now+=40;s.tick(now);}};
  advance(100);
  const idle=s.strokes; advance(10); assert.equal(s.strokes,idle+50, 'apenas cinco ponteiros no estado ocioso');
  for(const direction of [1,-1]) {
    s.win.scrollY=direction*200;s.events.get('scroll')();advance(5);
    const drawing=s.strokes;advance(1);assert.equal(s.strokes,drawing+6,'cinco ponteiros e um retângulo repetido');
    advance(100);
  }
});
test('eventos contínuos de scroll não reiniciam desenhos a cada frame', () => {
 const s=setup();for(let i=0;i<100;i++){s.events.get('scroll')();s.tick(i*40);}
 const before=s.strokes;s.tick(4040);assert.equal(s.strokes,before+6);
});
test('Canvas indisponível falha sem encobrir página', () => { const s = setup({ search: '?swarm=1', noContext: true }); assert.equal(s.win.ArthonSwarm.active, false); assert.equal(s.frames.size, 0); assert.equal(s.nodes.length, 0); });
