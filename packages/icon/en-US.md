## Icon

### Install
``` javascript
import { Icon } from 'zanm';

Vue.use(Icon);
```

### Usage

#### Basic Usage
View all usable icons on the right.

```html
<zan-icon name="success" />
```

#### Use local font file
Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'zanm/lib/zanm-css/icon-local.css';
```

#### Add custom iconfont

```css
@font-face {
  font-family: 'custom-iconfont';
  src: url('./iconfont.ttf') format('truetype');
}

.zan-icon {
  font-family: 'zanm-icon', 'custom-iconfont' !important;
}

.zan-icon-extra:before {
  content: '\e626';
}
```

```html
<zan-icon name="extra" />
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| name | Icon name | `String` | `''` |
| info | Info message | `String | Number` | `''` |
| color | Icon color | `String` | `inherit` |
| size | Icon size | `String` | `inherit` |
| class-prefix | ClassName prefix | `String` | `zan-icon` |


### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| click | Triggered when click icon | - |
