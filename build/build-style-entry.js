/**
 * Build style entry of all components
 */

const fs = require('fs-extra');
const path = require('path');
const components = require('./get-components');
const dependencyTree = require('dependency-tree');
const whiteList = ['info', 'icon', 'loading', 'cell'];
const dir = path.join(__dirname, '../es');

components.forEach(component => {
  const deps = analyzeDependencies(component);
  const esLessEntry = path.join(dir, component, 'style/index.js');
  const libLessEntry = path.join(__dirname, '../lib', component, 'style/index.js');
  const esLessContent = deps.map(dep => `import '../../zanm-less/${dep}.less';`).join('\n');
  const libLessContent = deps.map(dep => `require('../../zanm-less/${dep}.less');`).join('\n');
  const esCssEntry = path.join(dir, component, 'style/css.js');
  const libCssEntry = path.join(__dirname, '../lib', component, 'style/css.js');
  const esCssContent = deps.map(dep => `import '../../zanm-css/${dep}.css';`).join('\n');
  const libCssContent = deps.map(dep => `require('../../zanm-css/${dep}.css');`).join('\n');

  fs.outputFileSync(esLessEntry, esLessContent);
  fs.outputFileSync(libLessEntry, libLessContent);
  fs.outputFileSync(esCssEntry, esCssContent);
  fs.outputFileSync(libCssEntry, libCssContent);
});

// analyze component dependencies
function analyzeDependencies(component) {
  const checkList = ['base'];

  search(
    dependencyTree({
      directory: dir,
      filename: path.join(dir, component, 'index.js'),
      filter: path => !~path.indexOf('node_modules')
    }),
    component,
    checkList
  );

  if (!whiteList.includes(component)) {
    checkList.push(component);
  }

  return checkList.filter(item => checkComponentHasStyle(item));
}

function search(tree, component, checkList) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList);
    components
      .filter(item => key.replace(dir, '').split('/').includes(item))
      .forEach(item => {
        if (!checkList.includes(item) && !whiteList.includes(item) && item !== component) {
          checkList.push(item);
        }
      });
  });
}

function checkComponentHasStyle(component) {
  return fs.existsSync(
    path.join(__dirname, `../es/zanm-css/`, `${component}.css`)
  );
}
