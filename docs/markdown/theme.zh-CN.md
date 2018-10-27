## 定制主题
`Zanm` 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

### zanm 的样式变量
antd 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量，所有样式变量可以在 [这里]() 找到。

### 在 vue cli 3中定制主题
在项目根目录下新建文件`vue.config.js`：
```javascript
module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.less$/,
        use: [{
          loader: 'less-loader',
          options: {
            modifyVars: {
              'button-primary-color': '#ca0c16'
            },
            javascriptEnabled: true,
          },
        }],
      }],
    },
  }
}
```
