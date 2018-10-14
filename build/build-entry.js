const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components');
const version = process.env.VERSION || require('../package.json').version;
const tips = '// 此文件是通过 build/build-entry.js 自动生成的';
const root = path.join(__dirname, '../');
const join = dir => path.join(root, dir);

// 生成 zanm 入口文件
function buildZanmEntry() {
  // 无需安装组件
  const uninstallComponents = [
    'Lazyload',
    'Waterfall'
  ];
  // 引入列表
  const importList = [];
  // 导出列表
  const exportList = [];
  Components.forEach(name => {
    importList.push(`import ${uppercamelize(name)} from './${name}';`);
    exportList.push(`${uppercamelize(name)}`);
  });

  // 安装列表
  const installList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelize(name)));
  // 将要写入的内容
  const content = `${tips}
${importList.join('\n')}

const version = '${version}';
const components = [
  ${installList.join(',\n  ')}
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ${exportList.join(',\n  ')}
};

export default {
  install,
  version
};
`;

  // 写入内容
  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);
}

// 生成 Demo 的入口文件
function buildDemoEntry() {
  const dir = path.join(__dirname, '../packages');
  const demos = fs.readdirSync(dir)
    .filter(name => fs.existsSync(path.join(dir, `${name}/demo/index.vue`)))
    .map(name => `'${name}': () => wrapper(import('../../packages/${name}/demo'), '${name}')`);

  // 将要写入的内容
  const content = `${tips}
import { wrapper } from './demo-common';

export default {
  ${demos.join(',\n  ')}
};
`;
  // 写入内容
  fs.writeFileSync(path.join(dir, '../docs/src/demo-entry.js'), content);
}

// 为 markdown 文档生成 webpack 入口文件
function buildDocsEntry() {
  const output = join('docs/src/docs-entry.js');
  const getName = fullPath => fullPath.replace(/\/(en|zh)/, '.$1').split('/').pop().replace('.md', '');
  const docs = glob
    .sync([
      join('docs/**/*.md'),
      join('packages/**/*.md'),
      '!**/node_modules/**'
    ])
    .map(fullPath => {
      const name = getName(fullPath);
      return `'${name}': () => import('${path.relative(join('docs/src'), fullPath)}')`;
    });

  // 将要写入的内容
  const content = `${tips}
export default {
  ${docs.join(',\n  ')}
};
`;
  // 写入内容
  fs.writeFileSync(output, content);
}

// 生成 zanm 入口文件
buildZanmEntry();
// 生成 Demo 的入口文件
buildDemoEntry();
// 为 markdown 文档生成 webpack 入口文件
buildDocsEntry();

