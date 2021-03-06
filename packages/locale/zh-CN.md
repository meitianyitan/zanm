## 国际化
Zanm 默认采用中文作为语言，如果需要使用其他语言，可以参考下面的方案

### 多语言切换
Zanm 通过 Locale 组件实现多语言支持，使用 `Locale.use` 方法可以切换当前使用的语言。

```js
import { Locale } from 'zanm';
import enUS from 'zanm/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### 修改默认文案
通过 `Locale.add` 方法可以实现文案的修改和扩展，示例如下：

```js
import { Locale } from 'zanm';

const messages = {
  'zh-CN': {
    zvmPicker: {
      confirm: '关闭' // 将'确认'修改为'关闭'
    }
  }
};

Locale.add(messages);
```

### 配置文件

目前支持的语言:

| 语言 | 文件名 |
|-----------|-----------|
| 简体中文 | zh-CN |
| 英语 | en-US |
| 繁體中文 | zh-HK |

在 [这里](https://github.com/meitianyitan/zanm/tree/master/packages/locale/lang) 查看所有的 i18n 配置文件。
