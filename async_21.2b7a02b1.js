(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{125:function(s,a,n){"use strict";n.r(a);var e={created:function(){this.content=unescape("%3Ch2%3ECustom%20Theme%3C/h2%3E%0A%3Cp%3EZanm%20allows%20you%20to%20customize%20some%20basic%20design%20aspects%20in%20order%20to%20meet%20the%20needs%20of%20UI%20diversity%20from%20business%20and%20brand%2C%20including%20primary%20color%2C%20border%20radius%2C%20border%20color%2C%20etc.%3C/p%3E%0A%3Ch3%3Ezanm%20Vue%20Less%20variables%3C/h3%3E%0A%3Cp%3EWe%20are%20using%20%3Ca%20href%3D%22http%3A//lesscss.org/%22%3ELess%3C/a%3E%20as%20the%20development%20language%20for%20styling.%20A%20set%20of%20less%20variables%20are%20defined%20for%20each%20design%20aspect%20that%20can%20be%20customized%20to%20your%20needs.%3C/p%3E%0A%3Cp%3EThere%20are%20some%20major%20variables%20below%2C%20all%20less%20variables%20could%20be%20found%20in%20%3Ca%20href%3D%22https%3A//github.com/meitianyitan/zanm/blob/dev/packages/zanm-css/src/themes/default.less%22%3EDefault%20Variables%3C/a%3E.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-less%22%3E%3Cspan%20class%3D%22hljs-variable%22%3E@primary-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%231aad19%3C/span%3E%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5168%u5C40%u4E3B%u8272%3C/span%3E%0A%3Cspan%20class%3D%22hljs-variable%22%3E@warning-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23faad14%3C/span%3E%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u8B66%u544A%u8272%3C/span%3E%0A%3Cspan%20class%3D%22hljs-variable%22%3E@success-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%2352c41a%3C/span%3E%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u6210%u529F%u8272%3C/span%3E%0A%3Cspan%20class%3D%22hljs-variable%22%3E@error-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23f5222d%3C/span%3E%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u9519%u8BEF%u8272%3C/span%3E%0A%3Cspan%20class%3D%22hljs-variable%22%3E@text-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23333%3C/span%3E%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u4E3B%u6587%u672C%u8272%3C/span%3E%0A%3Cspan%20class%3D%22hljs-variable%22%3E@border-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23eee%3C/span%3E%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u8FB9%u6846%u8272%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EPlease%20report%20an%20issue%20if%20the%20existing%20list%20of%20variables%20is%20not%20enough%20for%20you.%3C/p%3E%0A%3Ch3%3EHow%20to%20do%20it%3C/h3%3E%0A%3Cp%3EWe%20will%20use%20%3Ca%20href%3D%22http%3A//lesscss.org/usage/%23using-less-in-the-browser-modify-variables%22%3EmodifyVars%3C/a%3E%20provided%20by%20less.js%20to%20override%20the%20default%20values%20of%20the%20variables.%20We%20now%20introduce%20some%20popular%20way%20to%20do%20it%20depends%20on%20different%20workflow.%3C/p%3E%0A%3Ch4%3ECustomize%20in%20webpack%3C/h4%3E%0A%3Cp%3EWe%20take%20a%20typical%20webpack.config.js%20file%20as%20example%20to%20customize%20it%27s%20%3Ca%20href%3D%22https%3A//github.com/webpack-contrib/less-loader%22%3Eless-loader%3C/a%3E%20options.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20webpack.config.js%3C/span%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erules%3C/span%3E%3A%20%5B%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etest%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-regexp%22%3E/%5C.less%24/%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Euse%3C/span%3E%3A%20%5B%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloader%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27style-loader%27%3C/span%3E%2C%0A%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloader%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27css-loader%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20translates%20CSS%20into%20CommonJS%3C/span%3E%0A%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloader%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27less-loader%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20compiles%20Less%20to%20CSS%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u65B0%u589E%3C/span%3E%0A%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmodifyVars%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27primary-color%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%231DA57A%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27link-color%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%231DA57A%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27border-radius-base%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%272px%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EjavascriptEnabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%5D%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20...other%20rules%3C/span%3E%0A%20%20%7D%5D%2C%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20...other%20config%3C/span%3E%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3ENote%20that%20do%20not%20exclude%20antd%20package%20in%20node_modules%20when%20using%20less-loader.%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch4%3ECustomize%20in%20vue%20cli%202%3C/h4%3E%0A%3Cp%3EModify%20the%20%3Ccode%3Ebuild/utils.js%3C/code%3E%20file%uFF1A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20build/utils.js%3C/span%3E%0A%20%20less%3A%20generateLoaders%28%3Cspan%20class%3D%22hljs-string%22%3E%27less%27%3C/span%3E%2C%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmodifyVars%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27primary-color%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%231DA57A%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27link-color%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%231DA57A%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27border-radius-base%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%272px%27%3C/span%3E%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EjavascriptEnabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%7D%29%2C%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ECustomize%20in%20vue%20cli%203%3C/h4%3E%0A%3Cp%3ECreate%20a%20new%20file%20%3Ccode%3Evue.config.js%3C/code%3E%20in%20the%20project%20directory%3A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EconfigureWebpack%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emodule%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erules%3C/span%3E%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etest%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-regexp%22%3E/%5C.less%24/%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Euse%3C/span%3E%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloader%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27less-loader%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eoptions%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmodifyVars%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27button-primary-color%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%23ca0c16%27%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EjavascriptEnabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A")}},l=n(0),C=Object(l.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.options.__file="theme.en-US.md";a.default=C.exports}}]);