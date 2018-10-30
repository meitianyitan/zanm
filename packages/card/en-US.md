## Card

### Install
``` javascript
import { Card } from 'zanm';

Vue.use(Card);
```

### Usage

#### Basic Usage

```html
<zvm-card
  title="Title"
  desc="Description"
  num="2"
  price="2.00"
  :thumb="imageURL"
/>
```

#### Advanced Usage
Use `slot` to custom content.

```html
<zvm-card
  num="2"
  tag="Tag"
  title="Title"
  desc="Description"  
  price="2.00"
  :thumb="imageURL"
  origin-price="10.00"
>
  <div slot="footer">
    <zvm-button size="mini">Button</zvm-button>
    <zvm-button size="mini">Button</zvm-button>
  </div>
</zvm-card>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| thumb | Left thumb image URL | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| tag | Tag | `String` | - |
| num | Number | `String | Number` | - |
| price | Price | `String | Number` | - |
| origin-price | Origin price | `String | Number` | - |
| centered | Whether content vertical centered | `String` | `false` |
| currency | Currency symbol |  `String` | `¥` |
| thumb-link | Thumb link URL | `String` | - |

### Slot

| name | Description |
|-----------|-----------|
| title | Custom title |
| desc | Custom description |
| tags | Custom tags |
| thumb | Custom thumb |
| footer | Custom footer |
