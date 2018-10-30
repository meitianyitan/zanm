## Badge 徽标数

### 使用指南
``` javascript
import { Badge, BadgeGroup } from 'zanm';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### 代码演示

#### 基础用法

通过在`zvm-badge-group`上设置`active-key`属性来控制选中的`badge`

```html
<zvm-badge-group :active-key="activeKey">
  <zvm-badge title="标签名称" @click="onClick" />
  <zvm-badge title="标签名称" @click="onClick" info="8" />
  <zvm-badge title="标签名称" @click="onClick" info="99" />
  <zvm-badge title="标签名称" @click="onClick" info="199" />
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

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| active-key | 选中`badge`的索引 | `String | Number` | `0` |

### Badge API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 内容 | `String` | `''` |
| info | 提示消息 | `String | Number` | `''` |
| url | 跳转链接 | `String` | - |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
