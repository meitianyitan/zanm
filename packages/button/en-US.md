## Button

### Install
``` javascript
import { Button } from 'zanm';

Vue.use(Button);
```

### Usage

#### Type

```html
<zvm-button type="default">Default</zvm-button>
<zvm-button type="primary">Primary</zvm-button>
<zvm-button type="warning">Warning</zvm-button>
<zvm-button type="error">Error</zvm-button>
```

#### Plain

```html
<zvm-button plain type="primary">Primary</zvm-button>
<zvm-button plain type="error">Error</zvm-button>
```

#### Disabled

```html
<zvm-button disabled type="primary">Diabled</zvm-button>
<zvm-button disabled type="error">Diabled</zvm-button>
```

#### Loading

```html 
<zvm-button loading type="primary" />
<zvm-button loading type="primary" />
```

#### Shape

```html 
<zvm-button square type="primary">Square</zvm-button>
<zvm-button round type="error">Round</zvm-button>
```

#### Size

```html 
<zvm-button size="large">Large</zvm-button>
<zvm-button size="normal">Normal</zvm-button>
<zvm-button size="small">Small</zvm-button>
<zvm-button size="mini">Mini</zvm-button>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| type | Can be set to `primary` `warning` `error` | `String` | `default` |
| size | Can be set to `normal` `large` `small` `mini` | `String` | `normal` |
| text | Text | `String` | - |
| tag | Tag | `String` | `button` |
| native-type | Native Type Attribute | `String` | `''` |
| plain | Whether to be plain button | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| block | Whether to set display block | `Boolean` | `false` |
| round | Whether to be round button | `Boolean` | `false` |
| square | Whether to be square button | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| click | Triggered when click button and not disabled or loading | - |
