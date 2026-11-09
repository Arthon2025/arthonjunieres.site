'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { createHash } = require('node:crypto');
const { resolve } = require('node:path');
const root = resolve(__dirname, '..');
const read = path => readFileSync(resolve(root, path), 'utf8');

test('a integração preserva o HTML revisado com o Lanyard aprovado', () => {
  const html = read('index.html')
    .replace('  <link rel="stylesheet" href="assets/css/site.css">', '  <style>' + read('assets/css/site.css') + '  </style>')
    .replace('  <script src="assets/js/motion-init.js"></script>', '  <script>' + read('assets/js/motion-init.js') + '</script>')
    .replace('  <script src="assets/js/site.js" defer></script>', '  <script>' + read('assets/js/site.js') + '  </script>')
    .replace(/  <script src="assets\/swarm\/swarm-adapter\.js" defer><\/script>\r?\n/, '')
    .replace(/  <script src="assets\/js\/text-typing\.js" defer><\/script>\r?\n/, '')
    .replace('  <link rel="icon" type="image/png" sizes="64x64" href="assets/images/favicon.png">', '  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect width=\'64\' height=\'64\' rx=\'12\' fill=\'%23100d19\'/%3E%3Cpath d=\'M13 47 28 16h8l15 31h-9l-3-7H25l-3 7h-9Zm15-14h8l-4-9-4 9Z\' fill=\'%23c4a0ff\'/%3E%3C/svg%3E">')
    .replaceAll('<img class="brand-mark" src="assets/images/aj-monogram.png" width="36" height="36" alt="" aria-hidden="true">', '<span class="brand-mark" aria-hidden="true">AJ</span>')
    .replace('.brand-mark{display:block;width:36px;height:36px;flex:none;object-fit:contain}', '.brand-mark{display:grid;place-items:center;width:36px;height:36px;border:1px solid rgba(196,160,255,.55);border-radius:9px;color:var(--lilac);font-size:15px;letter-spacing:-.09em}');
  // Baseline updated for the approved hero replacement and Lanyard stylesheet/module.
  // The editor normalizes line endings; restore original Windows CRLF for comparison.
  const hash = createHash('sha256').update(html.replace(/\r?\n/g, '\r\n')).digest('hex');
  assert.equal(hash, '7dce3f6620a282815b3bc77797c104e9dfef0e783507bdb7268f1e19e97fa430');
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
