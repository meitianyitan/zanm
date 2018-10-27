## 定制主题
`Zanm` 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

### zanm 的样式变量
zanm 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量，所有样式变量可以在 [这里](https://github.com/meitianyitan/zanm/blob/dev/packages/zanm-css/src/themes/default.less) 找到。
```less
@primary-color: #1aad19;
@text-color: #333;
@border-color: #eee;
@active-color: #e8e8e8;
@background-color: #f8f8f8;
```
如果以上变量不能满足你的定制需求，可以给我们提 issue。

### 定制方式
我们使用 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式来进行覆盖变量。
下面将针对不同的场景提供一些常用的定制方式。

#### 在 webpack 中定制主题
我们以 webpack@4 为例进行说明，以下是一个 `webpack.config.js` 的典型例子，对 [less-loader](https://github.com/webpack-contrib/less-loader) 的 options 属性进行相应配置。
``` javascript
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
      // 新增
      options: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    }],
    // ...other rules
  }],
  // ...other config
}
```
> 注意 less-loader 的处理范围不要过滤掉 node_modules 下的 zanm 包。

#### 在 vue cli 2中定制主题 
修改`build/utils.js`文件：
``` javascript
// build/utils.js
  less: generateLoaders('less', {
    modifyVars: {
      'primary-color': '#1DA57A',
      'link-color': '#1DA57A',
      'border-radius-base': '2px',
    },
    javascriptEnabled: true,
  }),
```

#### 在 vue cli 3中定制主题
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
