<h3 align="center" style="margin: 30px 0 35px;">一套基于 Vue.js 的移动端组件库</h3>

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
  🇬🇧 <a href="./README.md">访问英文版</a>
</p>

---

## 特性

* 支持 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* 支持 TypeScript
* 支持 SSR

## 安装

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

## 快速上手

#### 方式一. 使用  [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory。
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

接着你可以在代码中直接引入 Zanm 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'zanm';
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


## 贡献代码

使用过程中发现任何问题都可以提 [Issue](https://github.com/meitianyitan/zanm/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/meitianyitan/zanm/pulls)。

## 浏览器支持

现代浏览器以及 Android 4.0+, iOS 6+.

## 链接
* [详细文档](http://m.zantb.com/#/zh-CN/intro)
* [更新日志](http://m.zantb.com/#/zh-CN/changelog)

## 手机预览
可以手机扫码以下二维码访问手机端 demo：

<img src="http://static.sosout.com/images/preview_qrcode_20181023.png" width="220" height="220" />

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
