const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-web-component-example/runtime.js',
    './dist/angular-web-component-example/polyfills.js',
    './dist/angular-web-component-example/scripts.js',
    './dist/angular-web-component-example/main.js'
  ];

  await fs.ensureDir('dist');
  await concat(files, 'dist/ng-button-element.js');
})();