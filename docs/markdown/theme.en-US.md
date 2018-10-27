## Custom Theme

Zanm allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

### zanm Vue Less variables 
We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

There are some major variables below, all less variables could be found in [Default Variables](https://github.com/meitianyitan/zanm/blob/dev/packages/zanm-css/src/themes/default.less).
```less
@primary-color: #1aad19;
@text-color: #333;
@border-color: #eee;
@active-color: #e8e8e8;
@background-color: #f8f8f8;
```
Please report an issue if the existing list of variables is not enough for you.

### How to do it
We will use [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) provided by less.js to override the default values of the variables. We now introduce some popular way to do it depends on different workflow.

#### Customize in webpack
We take a typical webpack.config.js file as example to customize it's [less-loader](https://github.com/webpack-contrib/less-loader) options.
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
> Note that do not exclude antd package in node_modules when using less-loader.

#### Customize in vue cli 2 
Modify the `build/utils.js` file：
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

#### Customize in vue cli 3 
Create a new file `vue.config.js` in the project directory:
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