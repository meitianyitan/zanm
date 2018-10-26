## Custom Theme

Zanm allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

### 待实现
<!-- ### Option 1. PostCSS Plugin
You can import the postcss source code in your own project, then use [postcss-theme-variables](https://www.npmjs.com/package/postcss-theme-variables) to replace the postcss variable.

```javascript
// import base style
import 'zanm/packages/zanm-css/src/base.less';

// import component style
import 'zanm/packages/zanm-css/src/button.less';
import 'zanm/packages/zanm-css/src/checkbox.less';
```

Then require the plugin in the postcss.config.js, and configure the variables according to project needs, you can view all the available variables in [profile](https://github.com/meitianyitan/zanm/blob/dev/packages/zanm-css/src/common/var.less).

```javascript
module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: ['pcss', 'css']
    }),
    require('postcss-theme-variables')({
      vars: {
        red: '#F60',
        gray: '#CCC',
        blue: '#03A9F4'
      },
      prefix: '$'
    }),
    require('precss')(),
    require('postcss-calc')(),
    require('autoprefixer')({
      browsers: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
};
```

### Option 2. Local build
Zanm also support local build to custom themes.

```bash
# Clone the repository
git clone https://github.com/meitianyitan/zanm.git
cd packages/zanm-css
```

In the local zanm-css repository, modify the variables in src/common/var.less, then execute the following build command to generate the style file.
```bash
npm run build
``` -->
