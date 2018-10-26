/**
 * Compile components
 */
const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');
const compilerVue = require('vue-sfc-compiler');

const esDir = path.join(__dirname, '../es');
const libDir = path.join(__dirname, '../lib');
const srcDir = path.join(__dirname, '../packages');
const compilerOption = {
  babel: {
    configFile: path.join(__dirname, '../babel.config.js')
  }
};

const whiteList = /(demo|zanm-css|test|\.md)$/;

// clear dir
fs.emptyDirSync(esDir);
fs.emptyDirSync(libDir);

// copy packages
fs.copySync(srcDir, esDir);

compile(esDir);

function compile(dir, jsOnly = false) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const absolutePath = path.join(dir, file);
    // 删除不必要的文件
    if (whiteList.test(file)) {
      fs.removeSync(absolutePath);
      // 如果是目录，再次遍历
    } else if (isDir(absolutePath)) {
      return compile(absolutePath);
      // 编译 sfc
    } else if (/\.vue$/.test(file) && !jsOnly) {
      const source = fs.readFileSync(absolutePath, 'utf-8');
      fs.removeSync(absolutePath);

      const outputVuePath = absolutePath + '.js';
      const outputJsPath = absolutePath.replace('.vue', '.js');
      const output = fs.existsSync(outputJsPath) ? outputVuePath : outputJsPath;

      fs.outputFileSync(output, compilerVue(source, compilerOption).js);
    } else if (/\.js$/.test(file)) {
      const { code } = babel.transformFileSync(absolutePath, compilerOption.babel);
      fs.outputFileSync(absolutePath, code);
    }
  });
}

process.env.BABEL_MODULE = 'commonjs';

fs.copySync(srcDir, libDir);
compile(libDir);

// 是不是目录
function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}
