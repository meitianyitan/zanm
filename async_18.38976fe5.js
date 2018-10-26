(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{97:function(e,s,t){"use strict";t.r(s);var o={created:function(){this.content=unescape("%3Ch2%3ECustom%20Theme%3C/h2%3E%0A%3Cp%3EZanm%20allows%20you%20to%20customize%20some%20basic%20design%20aspects%20in%20order%20to%20meet%20the%20needs%20of%20UI%20diversity%20from%20business%20and%20brand%2C%20including%20primary%20color%2C%20border%20radius%2C%20border%20color%2C%20etc.%3C/p%3E%0A%3Ch3%3E%u5F85%u5B9E%u73B0%3C/h3%3E%0A%3C%21--%20%23%23%23%20Option%201.%20PostCSS%20Plugin%0AYou%20can%20import%20the%20postcss%20source%20code%20in%20your%20own%20project%2C%20then%20use%20%5Bpostcss-theme-variables%5D%28https%3A//www.npmjs.com/package/postcss-theme-variables%29%20to%20replace%20the%20postcss%20variable.%0A%0A%60%60%60javascript%0A//%20import%20base%20style%0Aimport%20%27zanm/packages/zanm-css/src/base.less%27%3B%0A%0A//%20import%20component%20style%0Aimport%20%27zanm/packages/zanm-css/src/button.less%27%3B%0Aimport%20%27zanm/packages/zanm-css/src/checkbox.less%27%3B%0A%60%60%60%0A%0AThen%20require%20the%20plugin%20in%20the%20postcss.config.js%2C%20and%20configure%20the%20variables%20according%20to%20project%20needs%2C%20you%20can%20view%20all%20the%20available%20variables%20in%20%5Bprofile%5D%28https%3A//github.com/meitianyitan/zanm/blob/dev/packages/zanm-css/src/common/var.less%29.%0A%0A%60%60%60javascript%0Amodule.exports%20%3D%20%7B%0A%20%20plugins%3A%20%5B%0A%20%20%20%20require%28%27postcss-easy-import%27%29%28%7B%0A%20%20%20%20%20%20extensions%3A%20%5B%27pcss%27%2C%20%27css%27%5D%0A%20%20%20%20%7D%29%2C%0A%20%20%20%20require%28%27postcss-theme-variables%27%29%28%7B%0A%20%20%20%20%20%20vars%3A%20%7B%0A%20%20%20%20%20%20%20%20red%3A%20%27%23F60%27%2C%0A%20%20%20%20%20%20%20%20gray%3A%20%27%23CCC%27%2C%0A%20%20%20%20%20%20%20%20blue%3A%20%27%2303A9F4%27%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20prefix%3A%20%27%24%27%0A%20%20%20%20%7D%29%2C%0A%20%20%20%20require%28%27precss%27%29%28%29%2C%0A%20%20%20%20require%28%27postcss-calc%27%29%28%29%2C%0A%20%20%20%20require%28%27autoprefixer%27%29%28%7B%0A%20%20%20%20%20%20browsers%3A%20%5B%27Android%20%3E%3D%204.0%27%2C%20%27iOS%20%3E%3D%207%27%5D%0A%20%20%20%20%7D%29%0A%20%20%5D%0A%7D%3B%0A%60%60%60%0A%0A%23%23%23%20Option%202.%20Local%20build%0AZanm%20also%20support%20local%20build%20to%20custom%20themes.%0A%0A%60%60%60bash%0A%23%20Clone%20the%20repository%0Agit%20clone%20https%3A//github.com/meitianyitan/zanm.git%0Acd%20packages/zanm-css%0A%60%60%60%0A%0AIn%20the%20local%20zanm-css%20repository%2C%20modify%20the%20variables%20in%20src/common/var.less%2C%20then%20execute%20the%20following%20build%20command%20to%20generate%20the%20style%20file.%0A%60%60%60bash%0Anpm%20run%20build%0A%60%60%60%20--%3E%0A")}},i=t(0),n=Object(i.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement;return(this._self._c||e)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);n.options.__file="theme.en-US.md";s.default=n.exports}}]);