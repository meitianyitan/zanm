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

  const esLessEntry = getEntry(component, 'es', 'less');
  const libLessEntry = getEntry(component, 'lib', 'less');
  const esCssEntry = getEntry(component, 'es', 'css');
  const libCssEntry = getEntry(component, 'lib', 'css');

  const esLessContent = getContent(deps, 'es', 'less');
  const libLessContent = getContent(deps, 'lib', 'less');
  const esCssContent = getContent(deps, 'es', 'css');
  const libCssContent = getContent(deps, 'lib', 'css');

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

// get css/less entry file of es/lib
function getEntry(c, v, s) {
  let entryFile = 'style/index.js';
  if (s === 'css') entryFile = 'style/css.js';
  return path.join(__dirname, `../${v}`, c, entryFile);
}

// get css/less content of es/lib
function getContent(deps, v, s) {
  if (v === 'es') return deps.map(dep => `import '../../zanm-${s}/${dep}.${s}';`).join('\n');
  if (v === 'lib') return deps.map(dep => `require('../../zanm-${s}/${dep}.${s}');`).join('\n');
}
