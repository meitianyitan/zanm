(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{119:function(s,a,n){"use strict";n.r(a);var e={created:function(){this.content=unescape("%3Ch2%3EContributing%3C/h2%3E%0A%3Cp%3EThank%20you%20for%20using.%3C/p%3E%0A%3Cp%3EThe%20following%20is%20a%20set%20of%20guidelines%20for%20contributing%20to%20Zanm.%20Please%20spend%20several%20minutes%20in%20reading%20these%20guidelines%20before%20you%20create%20an%20issue%20or%20pull%20request.%3C/p%3E%0A%3Ch3%3EBugs%3C/h3%3E%0A%3Cul%3E%0A%3Cli%3EBefore%20you%20reporting%20a%20bug%2C%20please%20make%20sure%20you%27ve%20searched%20exists%20issues%20or%20has%20been%20repaired.%3C/li%3E%0A%3Cli%3EWhen%20you%20report%20a%20bug%2C%20describe%20the%20problem%20you%20are%20experiencing%20in%20a%20short%20language%20and%20add%20the%20environment%20and%20recurrence%20steps%20when%20the%20problem%20occurs.%3C/li%3E%0A%3C/ul%3E%0A%3Ch3%3EPull%20Request%3C/h3%3E%0A%3Cul%3E%0A%3Cli%3EIf%20you%20encounter%20problems%2C%20it%20is%20recommended%20to%20keep%20your%20PR%20small%20enough%20to%20ensure%20that%20a%20PR%20solves%20only%20one%20problem%20or%20only%20adds%20a%20feature.%3C/li%3E%0A%3Cli%3EWhen%20adding%20components%20or%20modifying%20existing%20components%2C%20be%20sure%20to%20add%20or%20modify%20the%20test%20code%20to%20ensure%20the%20stability%20of%20the%20code.%3C/li%3E%0A%3Cli%3EIn%20the%20PR%2C%20add%20the%20appropriate%20description%2C%20and%20associate%20the%20relevant%20Issue.%3C/li%3E%0A%3C/ul%3E%0A%3Ch3%3ECoding%20style%3C/h3%3E%0A%3Cp%3EWhen%20participating%20in%20zanm%20development%2C%20please%20follow%20the%20agreed%20single-document%20component%20style%20guide%2C%20which%20is%20excerpted%20from%20%3Ca%20href%3D%22https%3A//cn.vuejs.org/v2/style-guide%22%3EVue%20official%20style%20guide%3C/a%3E%3C/p%3E%0A%3Ch4%3E%3Cstrong%3EComponent%20data%3C/strong%3E%3C/h4%3E%0A%3Cp%3EThe%20data%20for%20the%20component%20must%20be%20a%20function.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20bad%3C/span%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edata%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Efoo%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27bar%27%3C/span%3E%0A%20%20%7D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20good%3C/span%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%20%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Efoo%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27bar%27%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3ESingle-file%20component%20filename%3C/strong%3E%3C/h4%3E%0A%3Cp%3EA%20single-file%20component%27s%20file%20name%20should%20either%20always%20start%20with%20a%20word%20capitalization%20%28PascalCase%29%2C%20or%20it%20will%20always%20be%20a%20horizontal%20line%20connection%20%28kebab-case%29.%3C/p%3E%0A%3Cpre%3E%3Ccode%3E//%20bad%0Amycomponent.vue%0AmyComponent.vue%0A%0A//%20good%0Amy-component.vue%0AMyComponent.vue%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3ETightly%20coupled%20component%20names%3C/strong%3E%3C/h4%3E%0A%3Cp%3EChild%20components%20that%20are%20tightly%20coupled%20with%20the%20parent%20component%20should%20be%20named%20with%20the%20parent%20component%20name%20as%20a%20prefix.%3C/p%3E%0A%3Cpre%3E%3Ccode%3E//%20bad%0Acomponents/%0A%7C-%20TodoList.vue%0A%7C-%20TodoItem.vue%0A%u2514%u2500%20TodoButton.vue%0A%0A//%20good%0Acomponents/%0A%7C-%20TodoList.vue%0A%7C-%20TodoListItem.vue%0A%u2514%u2500%20TodoListItemButton.vue%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3ESelf-closing%20components%3C/strong%3E%3C/h4%3E%0A%3Cp%3EComponents%20that%20do%20not%20have%20content%20in%20a%20single-file%20component%20should%20be%20self-closing.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20bad%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Emy-component%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Emy-component%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20good%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Emy-component%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EProp%20name%20uppercase%20and%20lowercase%3C/strong%3E%3C/h4%3E%0A%3Cp%3EWhen%20declaring%20prop%2C%20the%20name%20should%20always%20use%20camelCase%2C%20and%20kebab-case%20should%20always%20be%20used%20in%20the%20template.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20bad%3C/span%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprops%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27greeting-text%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3EString%3C/span%3E%0A%20%20%7D%0A%7D%3B%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20good%3C/span%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprops%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EgreetingText%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3EString%3C/span%3E%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20bad%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ewelcome-message%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3EgreetingText%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22hi%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20good%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ewelcome-message%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Egreeting-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22hi%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EProps%20line%20break%3C/strong%3E%3C/h4%3E%0A%3Cp%3EMultiple%20Props%20elements%20should%20be%20composed%20in%20multiple%20lines%2C%20one%20row%20per%20Props%2C%20and%20a%20single%20line%20for%20the%20Closing%20tab.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20bad%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Emy-component%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Efoo%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22a%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebar%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22b%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebaz%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22c%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20good%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Emy-component%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Efoo%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22a%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebar%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22b%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebaz%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22c%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3Einstruction%20abbreviation%3C/strong%3E%3C/h4%3E%0A%3Cp%3Einstruction%20abbreviation%2C%20with%20%3Ccode%3E%3A%3C/code%3E%20means%20%3Ccode%3Ev-bind%3A%3C/code%3E%2C%20with%20%3Ccode%3E@%3C/code%3E%20means%20%3Ccode%3Ev-on%3A%3C/code%3E%3A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20bad%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Einput%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-bind%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-on%3Ainput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onInput%22%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20good%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Einput%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Einput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onInput%22%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EProps%20Order%3C/strong%3E%3C/h4%3E%0A%3Cp%3EThe%20Props%20of%20the%20label%20should%20have%20a%20uniform%20order%2C%20followed%20by%20directives%2C%20attributes%2C%20and%20events.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Emy-component%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-if%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22if%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-show%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22show%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eref%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22ref%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Akey%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22key%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22text%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Einput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onInput%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onChange%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EThe%20order%20of%20component%20options%3C/strong%3E%3C/h4%3E%0A%3Cp%3EComponent%20options%20should%20be%20in%20a%20uniform%20order.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%27%3C/span%3E%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emixins%3C/span%3E%3A%20%5B%5D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecomponents%3C/span%3E%3A%20%7B%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprops%3C/span%3E%3A%20%7B%7D%2C%0A%0A%20%20data%28%29%20%7B%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecomputed%3C/span%3E%3A%20%7B%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ewatch%3C/span%3E%3A%20%7B%7D%2C%0A%0A%20%20created%28%29%20%7B%7D%2C%0A%0A%20%20mounted%28%29%20%7B%7D%2C%0A%0A%20%20destroyed%28%29%20%7B%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EBlank%20lines%20in%20Component%20options%3C/strong%3E%3C/h4%3E%0A%3Cp%3EWhen%20there%20are%20more%20component%20options%2C%20it%20is%20recommended%20that%20you%20add%20blank%20lines%20between%20attributes.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecomputed%3C/span%3E%3A%20%7B%0A%20%20%20%20formattedValue%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20...%3C/span%3E%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20styles%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20...%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onInput%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20...%3C/span%3E%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20onChange%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20...%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EOrder%20of%20single-file%20component%20top-level%20labels%3C/strong%3E%3C/h4%3E%0A%3Cp%3ESingle-file%20components%20should%20always%20keep%20the%20order%20of%20the%20top-level%20labels%20consistent%20and%20leave%20blank%20lines%20between%20the%20labels.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A...%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22actionscript%22%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E/*%20...%20*/%3C/span%3E%0A%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22css%22%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E/*%20...%20*/%3C/span%3E%0A%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EDevelopment%20usage%3C/h3%3E%0A%3Ch4%3E%3Cstrong%3EDevelopment%20Workflow%3C/strong%3E%3C/h4%3E%0A%3Cp%3EGet%20Source%20code%uFF1A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3Egit%20%3Cspan%20class%3D%22hljs-built_in%22%3Eclone%3C/span%3E%20https%3A//github.com/meitianyitan/zanm.git%0A%0A%3Cspan%20class%3D%22hljs-built_in%22%3Ecd%3C/span%3E%20zanm%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EAfter%20cloning%20zanm.%20Then%2C%20you%20can%20run%20several%20commands%3A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20install%20dependencies%3C/span%3E%0Anpm%20run%20bootstrap%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20runs%20Zanm%20website%20locally%3C/span%3E%0Anpm%20run%20dev%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20checks%20the%20code%20style%3C/span%3E%0Anpm%20run%20lint%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20runs%20the%20complete%20test%20suite%3C/span%3E%0Anpm%20run%20%3Cspan%20class%3D%22hljs-built_in%22%3Etest%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20browser%20accesses%20%3Ca%20href%3D%22http%3A//localhost%3A8888%22%3Ehttp%3A//localhost%3A8888%3C/a%3E%20o%20see%20an%20example%20of%20all%20the%20components.%3C/p%3E%0A%3Ch4%3E%3Cstrong%3EProject%20structure%3C/strong%3E%3C/h4%3E%0A%3Cul%3E%0A%3Cli%3EThe%20component%20code%20for%20the%20warehouse%20is%20located%20under%20packages%2C%20one%20folder%20per%20component%3C/li%3E%0A%3Cli%3EThe%20component%20style%20code%20is%20located%20under%20packages/zanm-css/src%2C%20and%20zanm-css%20will%20be%20contracted%20separately%20at%20the%20time%20of%20publication.%3C/li%3E%0A%3Cli%3EThe%20docs%20directory%20is%20the%20code%20for%20the%20document%20web%20site%2C%20which%20you%20can%20run%20in%20the%20directory%20under%20catalog%20to%20open%20the%20documentation%20web%20site.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EThe%20project%20directory%20is%20roughly%20as%20follows%3A%3C/p%3E%0A%3Cpre%3E%3Ccode%3Ezanm%0A%u251C%u2500%20build%20%20%20%20%20%20%20%20%20%20%20%20%23%20Build%20Scripts%0A%u251C%u2500%20docs%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Document%20Web%20site%0A%u251C%u2500%20packages%20%20%20%20%20%20%20%20%20%23%20Component%20files%0A%u251C%u2500%20test%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Unit%20Test%0A%u2514%u2500%20types%20%20%20%20%20%20%20%20%20%20%20%20%23%20Type%20definition%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3ECreate%20a%20new%20component%3C/strong%3E%3C/h4%3E%0A%3Cp%3EWhen%20creating%20a%20new%20component%2C%20organize%20the%20file%20according%20to%20the%20directory%20structure%20below%20and%20configure%20the%20component%20name%20in%20%3Ccode%3Edocs/src/doc.config.js%3C/code%3E.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Epackages%0A%7C-%20button%0A%7C%20%20%u251C%u2500%20demo%20%20%20%20%20%20%20%20%23%20Sample%20code%0A%7C%20%20%u251C%u2500%20test%20%20%20%20%20%20%20%20%23%20Unit%20Test%0A%7C%20%20%u251C%u2500%20zh-CN.md%20%20%20%20%23%20Chinese%20documents%0A%7C%20%20%u251C%u2500%20en-US.md%20%20%20%20%23%20English%20documents%0A%7C%20%20%u2514%u2500%20index.vue%20%20%20%23%20Component%20entry%0A%u2514%u2500%20zanm-css%0A%20%20%20%u251C%u2500%20index.less%20%20%20%23%20Style%20entry%0A%20%20%20%u2514%u2500%20button.less%20%20%23%20Component%20style%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EComponent%20documentation%3C/strong%3E%3C/h4%3E%0A%3Cp%3EThe%20component%20documentation%20is%20in%20%3Ccode%3Emarkdown%3C/code%3E%20format%2C%20which%20includes%20examples%20of%20usage%20and%20%3Ccode%3EAPI%3C/code%3E%2C%20among%20other%20things.%3C/p%3E%0A%3Cp%3E%3Cstrong%3E1.%20Title%20specification%3C/strong%3E%3C/p%3E%0A%3Cp%3EThe%20document%20title%20starts%20with%20%3Ccode%3Eh2%3C/code%3E%20%28%3Ccode%3E%23%23%3C/code%3E%20title%29%20and%20adds%20a%20%3Ccode%3E%23%3C/code%3E%20to%20each%20lower%20level.%3C/p%3E%0A%3Cp%3E%3Cstrong%3E2.%20Component%20description%3C/strong%3E%3C/p%3E%0A%3Cp%3EThe%20headline%20below%20is%20a%20short%20description%20of%20the%20component.%3C/p%3E%0A%3Cp%3E%3Cstrong%3E3.%20User%20Guide%3C/strong%3E%3C/p%3E%0A%3Cp%3EIf%20the%20component%20requires%20a%20guide%2C%20place%20it%20under%20the%20component%20description%20and%20start%20with%20a%20level%20two%20heading.%3C/p%3E%0A%3Cp%3E%3Cstrong%3E4.%20Code%20Demo%3C/strong%3E%3C/p%3E%0A%3Cp%3EWhen%20writing%20code%20demos%2C%20it%20is%20recommended%20to%20start%20with%20simple%20usage%2C%20and%20not%20to%20come%20up%20with%20a%20bunch%20of%20APIs%20at%20the%20same%20time%2C%20making%20it%20difficult%20to%20get%20started.%20And%20an%20example%20only%20demonstrates%20the%20use%20of%20an%20API%2C%20such%20as%20no%20special%20requirements%20do%20not%20demonstrate%20in%20one%20example%20multiple%20APIs%20mixed%20use.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ezvm-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asize%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22size%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20Large%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ezvm-button%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esize%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27large%27%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3E5.%20API%3C/strong%3E%3C/p%3E%0A%3Cp%3EAPI%20description%20of%20the%20component%2C%20please%20write%20it%20as%20a%20table%20containing%20the%20following%20columns%3A%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%3C/td%3E%0A%3Ctd%3EBoolean%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Cp%3E%3Cstrong%3E6.%20Event%3C/strong%3E%3C/p%3E%0A%3Cp%3EFor%20an%20Event%20description%20of%20the%20component%2C%20write%20it%20as%20a%20table%20containing%20the%20following%20columns%3A%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20button%20and%20not%20disabled%20or%20loading%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch4%3E%3Cstrong%3EInter-component%20referencing%3C/strong%3E%3C/h4%3E%0A%3Cp%3EFor%20example%2C%20%3Ccode%3EDialog%3C/code%3E%20refers%20to%20the%20%3Ccode%3EButton%3C/code%3E%20component%20and%20writes%20the%20relative%20path%20reference%20directly.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Button%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27../button%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%3Cstrong%3EComponent%20creation%3C/strong%3E%3C/h4%3E%0A%3Cp%3EThe%20components%20in%20the%20Zanm%20are%20created%20uniformly%20by%20the%20%3Ccode%3Ecreate%3C/code%3E%20method%2C%20and%20the%20%3Ccode%3Ecreate%3C/code%3E%20method%20injects%20basic%20dependencies%20and%20methods%20into%20the%20options%20file.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20create%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27../utils/create%27%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20create%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27button%27%3C/span%3E%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A")}},t=n(0),C=Object(t.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.options.__file="contribution.en-US.md";a.default=C.exports}}]);