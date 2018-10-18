## 快速上手

### 脚手架

推荐使用 Vue 官方提供的脚手架 [Vue Cli 3](https://cli.vuejs.org/zh/) 创建项目

```bash
# 安装 Vue Cli
npm install -g @vue/cli

# 创建一个项目
vue create hello-world
```

创建完成后，可以通过命令打开图形化界面

```bash
# 打开图形化界面
vue ui
```

在图形化界面中，点击`依赖` -> `安装依赖`，然后将 `zanm` 添加到依赖中即可。

<img width="100%" style="box-shadow: 0 1px 1px rgba(0, 0, 0, .1); border-radius: 3px;" src="http://static.sosout.com/images/quickstart-ui.png" >

### 示例工程

我们提供了一个基于 Vue Cli 3 的示例工程：[Zanm Demo](https://github.com/meitianyitan/zanm-demo)。

### 安装

#### NPM

```shell
npm i zanm -S
```

#### YARN

```shell
yarn add zanm
```

#### CDN

访问下面的文件 URL，会自动重定向至最新版本的 CDN 链接，建议使用固定版本的 CDN 链接，避免升级时受到非兼容性更新的影响。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/zanm/lib/zanm-css/index.css">

<!-- 引入组件 -->
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/zanm/lib/zanm.min.js"></script>
```

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// .babelrc 中配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "zanm",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
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

接着你可以在代码中直接引入 Zanm 组件，插件会自动将代码转化为方式二中的按需引入形式

```js
import { Button, Cell } from 'zanm';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'zanm/lib/button';
import 'zanm/lib/zanm-css/base.css';
import 'zanm/lib/zanm-css/button.css';
```
 
#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import Zanm from 'zanm';
import 'zanm/lib/zanm-css/index.css';

Vue.use(Zanm);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件


### Rem 适配

Zanm 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    }
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

> 注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 Zanm 的样式无法被编译
