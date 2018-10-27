## Custom Theme

Zanm allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

### Customize in vue cli 3 
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