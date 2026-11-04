'use strict';
// One-time, byte-preserving extraction of the original inline assets.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const filename = path.join(root, 'index.html');
let html = fs.readFileSync(filename, 'utf8');
if (!html.includes('  <style>')) { console.log('Assets already extracted.'); process.exit(0); }
const extract = (pattern, destination, replacement) => {
  const match = html.match(pattern);
  if (!match) throw new Error('Expected inline asset not found: ' + destination);
  const target = path.join(root, destination);
  if (fs.existsSync(target)) throw new Error('Refusing to overwrite existing asset: ' + destination);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, match[1]);
  html = html.replace(pattern, replacement);
};
extract(/  <style>([\s\S]*?)  <\/style>/, 'assets/css/site.css', '  <link rel="stylesheet" href="assets/css/site.css">');
extract(/  <script>(if \('IntersectionObserver'[\s\S]*?)<\/script>/, 'assets/js/motion-init.js', '  <script src="assets/js/motion-init.js"></script>');
extract(/  <script>(\r?\n\s*document.getElementById\('year'\)[\s\S]*?)  <\/script>/, 'assets/js/site.js', '  <script src="assets/js/site.js" defer></script>');
fs.writeFileSync(filename, html);
console.log('Extracted CSS and scripts; original payloads preserved.');
