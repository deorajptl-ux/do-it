// Inlines css + js into one self-contained fragment (dist/artifact.html) and a full page (dist/standalone.html).
const fs = require('fs'), path = require('path');
const r = p => fs.readFileSync(path.join(__dirname, p), 'utf8');
const js = ['util', 'storage', 'library', 'dashboard', 'exam', 'result', 'upload', 'main'].map(n => r(`js/${n}.js`)).join('\n');
const css = r('css/styles.css');
const body = `<div id="app"></div>\n<div id="exam" hidden></div>\n<div id="modal-root"></div>\n<script>\n${js}\n</script>`;
const head = `<title>DO IT</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n<style>\n${css}\n</style>\n`;
fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist/artifact.html'), head + body);
fs.writeFileSync(path.join(__dirname, 'dist/standalone.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">${head}</head><body>${body}</body></html>`);
console.log('built');
