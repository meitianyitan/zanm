## 定制主题
`Zanm` 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

### 待实现
<!-- ### 方案一. PostCSS 插件
在项目中直接引入组件对应的 postcss 源代码，并通过 postcss 插件 [postcss-theme-variables](https://www.npmjs.com/package/postcss-theme-variables) 替换颜色变量，步骤如下：

```javascript
// 引入基础样式
import 'zanm/packages/zanm-css/src/base.less';

// 引入组件对应的样式
import 'zanm/packages/zanm-css/src/button.less';
import 'zanm/packages/zanm-css/src/checkbox.less';
```

接着在 postcss.config.js 中引入所需的 postcss 插件，并根据项目需求配置颜色变量，所有可用的颜色变量请参考 [配置文件](https://github.com/meitianyitan/zanm/blob/dev/packages/zanm-css/src/common/var.less)

```javascript
module.exports = {
  plugins: [
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

### 方案二. 本地构建
可以通过在本地构建 zanm-css 的方式生成所需的主题

```bash
# 克隆仓库
git clone https://github.com/meitianyitan/zanm.git
cd packages/zanm-css
```

在本地 zanm-css 仓库中，修改 src/common/var.less 中的颜色变量，然后执行以下构建命令，即可生成对应的样式文件
```bash
npm run build
``` -->
