## Badge

### Install
``` javascript
import { Badge, BadgeGroup } from 'zanm';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### Usage

#### Basic Usage
Use `active-key` prop to set index of chosen 'badge'

```html
<zvm-badge-group :active-key="activeKey">
  <zvm-badge title="Title" @click="onClick" />
  <zvm-badge title="Title" @click="onClick" info="8" />
  <zvm-badge title="Title" @click="onClick" info="99" />
  <zvm-badge title="Title" @click="onClick" info="199" />
</zvm-badge-group>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
```

### BadgeGroup API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| active-key | Index of chosen badge | `String | Number` | `0` |

### Badge API
| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| title | Content | `String` | `''` |
| info | Info Message | `String | Number` | `''` |
| url | Link | `String` | - |
