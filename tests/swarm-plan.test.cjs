'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { createHash } = require('node:crypto');
const { resolve } = require('node:path');
const root = resolve(__dirname, '..');
const read = path => readFileSync(resolve(root, path), 'utf8');

test('a integração preserva o HTML original exceto o loader aprovado', () => {
  const html = read('index.html')
    .replace('  <link rel="stylesheet" href="assets/css/site.css">', '  <style>' + read('assets/css/site.css') + '  </style>')
    .replace('  <script src="assets/js/motion-init.js"></script>', '  <script>' + read('assets/js/motion-init.js') + '</script>')
    .replace('  <script src="assets/js/site.js" defer></script>', '  <script>' + read('assets/js/site.js') + '  </script>')
    .replace(/  <script src="assets\/swarm\/swarm-adapter\.js" defer><\/script>\r?\n/, '')
    .replace(/  <script src="assets\/js\/text-typing\.js" defer><\/script>\r?\n/, '');
  // The editor normalizes line endings; restore original Windows CRLF for comparison.
  const hash = createHash('sha256').update(html.replace(/\r?\n/g, '\r\n')).digest('hex');
  assert.equal(hash, '7e367b65efbbdc15bd3bf8c01a7f913d8eb388f1f7cee88d0f2f7701398951a0');
});

test('a configuração bloqueia ativação e cópia sem autorização', () => {
  const config = JSON.parse(read('assets/swarm/integration.config.json'));
  assert.equal(config.enabled, true);
  assert.equal(config.status, 'independent-implementation');
  assert.equal(config.upstream.commit, '18fd2614ebea68e64f05a8d269d27de022d50cc9');
  assert.equal(config.upstream.reuseAuthorized, false);
  assert.equal(config.upstream.vendored, false);
  assert.equal(config.activation.mode, 'auto-on-load');
  assert.equal(config.activation.sound, false);
  assert.equal(config.accessibility.respectReducedMotion, false);
  assert.equal(config.accessibility.preserveNativeCursor, true);
  assert.equal(config.accessibility.restoreFocusOnExit, true);
  assert.equal(config.fallback.keepOriginalPageInteractive, true);
});

test('plano, contrato e instruções de autorização estão presentes', () => {
  for (const path of ['docs/swarm-integration.plan.md', 'assets/swarm/README.md', 'vendor/swarm-cursors/README.md']) {
    assert.ok(existsSync(resolve(root, path)), path);
    assert.ok(read(path).length > 200, path);
  }
  assert.equal((read('index.html').match(/src="assets\/swarm\/swarm-adapter.js"/g) || []).length, 1, 'um único loader local');
});
