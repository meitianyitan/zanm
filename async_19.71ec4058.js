(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{92:function(u,s,A){"use strict";A.r(s);var E={created:function(){this.content=unescape("%3Ch2%3E%u5B9A%u5236%u4E3B%u9898%3C/h2%3E%0A%3Cp%3E%3Ccode%3EZanm%3C/code%3E%20%u8BBE%u8BA1%u89C4%u8303%u4E0A%u652F%u6301%u4E00%u5B9A%u7A0B%u5EA6%u7684%u6837%u5F0F%u5B9A%u5236%uFF0C%u4EE5%u6EE1%u8DB3%u4E1A%u52A1%u548C%u54C1%u724C%u4E0A%u591A%u6837%u5316%u7684%u89C6%u89C9%u9700%u6C42%uFF0C%u5305%u62EC%u4F46%u4E0D%u9650%u4E8E%u4E3B%u8272%u3001%u5706%u89D2%u3001%u8FB9%u6846%u548C%u90E8%u5206%u7EC4%u4EF6%u7684%u89C6%u89C9%u5B9A%u5236%u3002%3C/p%3E%0A%3Ch3%3E%u5F85%u5B9E%u73B0%3C/h3%3E%0A%3C%21--%20%23%23%23%20%u65B9%u6848%u4E00.%20PostCSS%20%u63D2%u4EF6%0A%u5728%u9879%u76EE%u4E2D%u76F4%u63A5%u5F15%u5165%u7EC4%u4EF6%u5BF9%u5E94%u7684%20postcss%20%u6E90%u4EE3%u7801%uFF0C%u5E76%u901A%u8FC7%20postcss%20%u63D2%u4EF6%20%5Bpostcss-theme-variables%5D%28https%3A//www.npmjs.com/package/postcss-theme-variables%29%20%u66FF%u6362%u989C%u8272%u53D8%u91CF%uFF0C%u6B65%u9AA4%u5982%u4E0B%uFF1A%0A%0A%60%60%60javascript%0A//%20%u5F15%u5165%u57FA%u7840%u6837%u5F0F%0Aimport%20%27zanm/packages/zanm-css/src/base.less%27%3B%0A%0A//%20%u5F15%u5165%u7EC4%u4EF6%u5BF9%u5E94%u7684%u6837%u5F0F%0Aimport%20%27zanm/packages/zanm-css/src/button.less%27%3B%0Aimport%20%27zanm/packages/zanm-css/src/checkbox.less%27%3B%0A%60%60%60%0A%0A%u63A5%u7740%u5728%20postcss.config.js%20%u4E2D%u5F15%u5165%u6240%u9700%u7684%20postcss%20%u63D2%u4EF6%uFF0C%u5E76%u6839%u636E%u9879%u76EE%u9700%u6C42%u914D%u7F6E%u989C%u8272%u53D8%u91CF%uFF0C%u6240%u6709%u53EF%u7528%u7684%u989C%u8272%u53D8%u91CF%u8BF7%u53C2%u8003%20%5B%u914D%u7F6E%u6587%u4EF6%5D%28https%3A//github.com/meitianyitan/zanm/blob/dev/packages/zanm-css/src/common/var.less%29%0A%0A%60%60%60javascript%0Amodule.exports%20%3D%20%7B%0A%20%20plugins%3A%20%5B%0A%20%20%20%20require%28%27postcss-theme-variables%27%29%28%7B%0A%20%20%20%20%20%20vars%3A%20%7B%0A%20%20%20%20%20%20%20%20red%3A%20%27%23F60%27%2C%0A%20%20%20%20%20%20%20%20gray%3A%20%27%23CCC%27%2C%0A%20%20%20%20%20%20%20%20blue%3A%20%27%2303A9F4%27%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20prefix%3A%20%27%24%27%0A%20%20%20%20%7D%29%2C%0A%20%20%20%20require%28%27precss%27%29%28%29%2C%0A%20%20%20%20require%28%27postcss-calc%27%29%28%29%2C%0A%20%20%20%20require%28%27autoprefixer%27%29%28%7B%0A%20%20%20%20%20%20browsers%3A%20%5B%27Android%20%3E%3D%204.0%27%2C%20%27iOS%20%3E%3D%207%27%5D%0A%20%20%20%20%7D%29%0A%20%20%5D%0A%7D%3B%0A%60%60%60%0A%0A%23%23%23%20%u65B9%u6848%u4E8C.%20%u672C%u5730%u6784%u5EFA%0A%u53EF%u4EE5%u901A%u8FC7%u5728%u672C%u5730%u6784%u5EFA%20zanm-css%20%u7684%u65B9%u5F0F%u751F%u6210%u6240%u9700%u7684%u4E3B%u9898%0A%0A%60%60%60bash%0A%23%20%u514B%u9686%u4ED3%u5E93%0Agit%20clone%20https%3A//github.com/meitianyitan/zanm.git%0Acd%20packages/zanm-css%0A%60%60%60%0A%0A%u5728%u672C%u5730%20zanm-css%20%u4ED3%u5E93%u4E2D%uFF0C%u4FEE%u6539%20src/common/var.less%20%u4E2D%u7684%u989C%u8272%u53D8%u91CF%uFF0C%u7136%u540E%u6267%u884C%u4EE5%u4E0B%u6784%u5EFA%u547D%u4EE4%uFF0C%u5373%u53EF%u751F%u6210%u5BF9%u5E94%u7684%u6837%u5F0F%u6587%u4EF6%0A%60%60%60bash%0Anpm%20run%20build%0A%60%60%60%20--%3E%0A")}},e=A(0),F=Object(e.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var u=this.$createElement;return(this._self._c||u)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);F.options.__file="theme.zh-CN.md";s.default=F.exports}}]);