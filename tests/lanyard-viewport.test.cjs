'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const THREE = require('three');
const source = readFileSync(resolve(__dirname, '../src/lanyard/Lanyard.jsx'), 'utf8');
// Exercise the actual viewport callback with Three's real camera projection.
const body = source.match(/const syncViewport = \(\) => \{([\s\S]*?)\n    \};/)[1];
const sync = new Function('wideSurface', 'container', 'surface', 'renderer', 'camera', 'view', body);
for (const c of [
  { width: 1900, height: 795, left: 1070, top: 0, localWidth: 560, localHeight: 660 },
  { width: 390, height: 1200, left: 16, top: 600, localWidth: 358, localHeight: 500 }
]) test(`hero ${c.width}px preserves badge position and expands all edges`, () => {
  const view = { width: c.localWidth, height: c.localHeight };
  const camera = new THREE.PerspectiveCamera(24, view.width / view.height, .1, 200);
  camera.position.z = 8; camera.updateMatrixWorld();
  const point = new THREE.Vector3(.3, -.5, 0);
  const before = point.clone().project(camera);
  const expected = { x: c.left + (before.x + 1) / 2 * view.width, y: c.top + (1 - before.y) / 2 * view.height };
  const renderer = { setSize(w, h) { this.width = w; this.height = h; } };
  const surface = { clientWidth: c.width, clientHeight: c.height, getBoundingClientRect: () => ({ left: 0, top: 80 }) };
  const reference = { getBoundingClientRect: () => ({ left: c.left, top: 80 + c.top }) };
  sync(true, reference, surface, renderer, camera, view);
  const after = point.clone().project(camera);
  assert.ok(Math.abs((after.x + 1) / 2 * c.width - expected.x) < 1e-7);
  assert.ok(Math.abs((1 - after.y) / 2 * c.height - expected.y) < 1e-7);
  assert.equal(renderer.width, c.width);
  assert.equal(renderer.height, c.height);
  const ray = new THREE.Raycaster();
  ray.setFromCamera(new THREE.Vector2(after.x, after.y), camera);
  assert.ok(ray.ray.distanceToPoint(point) < 1e-7, 'drag picking matches the expanded projection');
});
test('release restores click-through without shrinking the render area', () => {
  const body = source.match(/const setDragging = value => \{([\s\S]*?)\n    \};/)[1];
  const canvas = { style: {} };
  const set = new Function('canvas', 'wideSurface', 'let dragging; return value => {' + body + '; return dragging; };')(canvas, true);
  assert.equal(set(true), true);
  assert.equal(canvas.style.pointerEvents, 'auto');
  assert.equal(set(false), false);
  assert.equal(canvas.style.pointerEvents, 'none');
  assert.equal(canvas.style.touchAction, 'auto');
});
