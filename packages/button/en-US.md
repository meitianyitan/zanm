## Button

### Install
``` javascript
import { Button } from 'zanm';

Vue.use(Button);
```

### Usage

#### Type

```html
<zan-button type="primary">Primary</zan-button>
<zan-button type="danger">Danger</zan-button>
<zan-button type="default">Default</zan-button>
<zan-button type="warning">Warning</zan-button>
```

#### Plain

```html
<zan-button plain type="primary">Primary</zan-button>
<zan-button plain type="danger">Danger</zan-button>
```

#### Disabled

```html
<zan-button disabled type="primary">Diabled</zan-button>
<zan-button disabled type="danger">Diabled</zan-button>
```

#### Loading

```html 
<zan-button loading type="primary" />
<zan-button loading type="primary" />
```

#### Shape

```html 
<zan-button square type="primary">Square</zan-button>
<zan-button round type="danger">Round</zan-button>
```

#### Size

```html 
<zan-button size="large">Large</zan-button>
<zan-button size="normal">Normal</zan-button>
<zan-button size="small">Small</zan-button>
<zan-button size="mini">Mini</zan-button>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| type | Can be set to `primary` `warning` `danger` | `String` | `default` |
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
