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

## Quickstart

### Install

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

### Usage

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

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'zanm',
      libraryDirectory: 'es',
      style: true
    }, 'zanm']
  ]
};
```

Then you can import components from zanm, equivalent to import manually below.

```js
import { Button } from 'zanm';
```

If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead, We recomment to use [Vue Cli 3](https://cli.vuejs.org/zh/) to build：
```bash
# Install ts-import-plugin
npm i ts-import-plugin -D
```

```js
// vue.config.js
const tsImportPluginFactory = require('ts-import-plugin');
module.exports = {
  parallel: false,
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

### ssr
#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)
Install `babel-plugin-import`：
``` bash
$ npm i babel-plugin-import -D
```
Modify `nuxt.config.js`，the following labeled `zanm-nuxt-ssr-config` is where it needs to be configured:
``` js
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // zanm-nuxt-ssr-config 全部引用的时候需要用到
    // 'zanm/lib/zanm-css/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/zanm', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    vendor: ['zanm'],
    maxChunkSize: 300000,
    // zanm-nuxt-ssr-config
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'zanm',
            'styleLibraryName': 'zanm-css'
          }
        ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // zanm-nuxt-ssr-config There is a need to install url-loader
        config.module.rules.push({
          test: /\.(ttf|svg)$/,
          loader: 'url-loader'
        })
      }
    }
  }
}
```

Edit `plugins/zanm`：
``` js
import Vue from 'vue'
import { Button } from 'zanm'
Vue.component(Button.name, Button)
```
Finally, use the component:
``` html
<zvm-button type="primary">Primary</zvm-button>
```

#### 2. Import all components

Modify `nuxt.config.js`, the following labeled `zanm-nuxt-ssr-config` is where it needs to be configured:
``` js
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // zanm-nuxt-ssr-config
    'zanm/lib/zanm-css/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // zanm-nuxt-ssr-config
    '@/plugins/zanm'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // zanm-nuxt-ssr-config 
        config.module.rules.push({
          test: /\.(ttf|svg)$/,
          loader: 'url-loader'
        })
      }
    }
  }
}
```

Edit `plugins/zanm`：
``` js
import Vue from 'vue'
import Zanm from 'zanm'

Vue.use(Zanm)
```

Finally, use the component:
``` html
<zvm-button type="primary">Primary</zvm-button>
```

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 6+.

## Links
* [Documentation](http://m.zantb.com/#/en-US/intro)
* [Changelog](http://m.zantb.com/#/en-US/changelog)

## Preview

You can scan the following QR code to access the demo：

<img src="http://static.sosout.com/images/preview_qrcode_20181025.png" width="220" height="220" />

## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
