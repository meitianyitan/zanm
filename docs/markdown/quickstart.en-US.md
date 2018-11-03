## Quickstart

### Starter kit

We recomment to use [Vue Cli 3](https://cli.vuejs.org/zh/) to create a project.

```bash
# Install Vue Cli
npm install -g @vue/cli

# Create a project
vue create hello-world
```

After the creation is complete, you can open the GUI by command.

```bash
# Open GUI
vue ui
```

In the GUI, click on 'Dependencies' -> `Install Dependencies` and add `zanm` to the dependencies.

<img width="100%" style="box-shadow: 0 1px 1px rgba(0, 0, 0, .1); border-radius: 3px;" src="http://static.sosout.com/images/quickstart-ui.png" />

<!-- ### Sample Project

I have provided [an example project](https://github.com/meitianyitan/zanm-demo) based on the Vue Cli 3. -->

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

### Rem units

Zanm use `px` as size units by default，you can use tools such as `postcss-pxtorem` to transform units to `rem`.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

postcss config example:

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 6']
    }
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```
