## Internationalization
The default language of Zanm is Chinese. If you want to use other languages, you can follow the instructions below.

### Switch languages
Zanm supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to diffrent languages.

```js
import { Locale } from 'zanm';
import enUS from 'zanm/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Modify default configs
Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'zanm';

const messages = {
  'en-US': {
    zvmPicker: {
      confirm: 'Close'
    }
  }
};

Locale.add(messages);
```

### Config files
Current supported languages:

| Language | Filename |
|-----------|-----------|
| Chinese | zh-CN |
| English | en-US |
| Traditional Chinese | zh-HK |

View all language configs [Here](https://github.com/meitianyitan/zanm/tree/master/packages/locale/lang).
