## Tag

### Install
``` javascript
import { Tag } from 'zanm';

Vue.use(Tag);
```

### Usage

#### Basic Usage

```html
<zvm-tag>Tag</zvm-tag>
<zvm-tag type="danger">Tag</zvm-tag>
<zvm-tag type="success">Tag</zvm-tag>
<zvm-tag type="primary">Tag</zvm-tag>
```

#### Plain style

```html
<zvm-tag plain>Tag</zvm-tag>
<zvm-tag plain type="danger">Tag</zvm-tag>
<zvm-tag plain type="primary">Tag</zvm-tag>
<zvm-tag plain type="success">Tag</zvm-tag>
```

#### Mark style

```html
<zvm-tag mark>Tag</zvm-tag>
<zvm-tag mark type="danger">Tag</zvm-tag>
<zvm-tag mark type="primary">Tag</zvm-tag>
<zvm-tag mark type="success">Tag</zvm-tag>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| type | Type, can be set to `primary` `success` `danger` | `String` | `''`|
| plain | Whether to be plain style | `Boolean` | `false` |
| mark | Wtether to be mark style | `Boolean` | `false` |

### Slot

| name | Description |
|-----------|-----------|
| - | Default slot |
