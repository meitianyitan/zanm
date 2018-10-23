<h3 align="center" style="margin: 30px 0 35px;">A Mobile UI Components built on Vue</h3>

<p align="center">
    <img src="https://img.shields.io/npm/v/zanm.svg?style=flat" alt="npm version" />
    <img src="https://www.travis-ci.org/meitianyitan/zanm.svg?branch=dev" alt="Build Status" />
    <img src="https://img.shields.io/npm/dt/zanm.svg" alt="downloads" />
    <img src="https://img.badgesize.io/https://unpkg.com/zanm/lib/zanm.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size" alt="JS Gzip Size" />
    <img src="https://img.badgesize.io/https://unpkg.com/zanm/lib/zanm-css/index.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size" alt="CSS Gzip Size" />
    <img src="http://isitmaintained.com/badge/open/meitianyitan/zanm.svg" alt="issue" />
    <img src="https://img.shields.io/codecov/c/github/meitianyitan/zanm/dev.svg" alt="Coverage Status" />
</p>

<p align="center">
  🇨🇳 <a href="./README.zh-CN.md">访问中文版</a>
</p>

---

## Features

* Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* Support TypeScript
* Support SSR

## Install

#### NPM

```shell
npm i zanm -S
```

#### YARN

```shell
yarn add zanm
```

#### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://unpkg.com/zanm/lib/zanm-css/index.css" />

<!-- import script -->
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/zanm/lib/zanm.min.js"></script>
```

## Quickstart

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "zanm",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

Then you can import components from zanm, equivalent to import manually below.

```js
import { Button } from 'zanm';
```

If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead, The following is a configuration using Vue's official scaffolding [Vue Cli 3](https://cli.vuejs.org/zh/) to build：
```bash
# Install ts-import-plugin
npm i ts-import-plugin -D
```

```js
// vue.config.js
const tsImportPluginFactory = require('ts-import-plugin');
module.exports = {
  parellel: false,
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [{
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          happyPackMode: false,
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'zanm',
              libraryDirectory: 'es',
              style: true
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
      }]
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
```

#### 2. Manually import

```js
import Button from 'zanm/lib/button';
import 'zanm/lib/zanm-css/base.css';
import 'zanm/lib/zanm-css/button.css';
```

#### 3. Import all components

```js
import Vue from 'vue';
import Zanm from 'zanm';
import 'zanm/lib/zanm-css/index.css';

Vue.use(Zanm);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 6+.

## Links
* [Documentation](http://m.zantb.com/#/en-US/intro)
* [Changelog](http://m.zantb.com/#/en-US/changelog)

## Preview

You can scan the following QR code to access the demo：

<img src="http://static.sosout.com/images/preview_qrcode_20181023.png" width="220" height="220" />

## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
