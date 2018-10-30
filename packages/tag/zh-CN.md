## Tag 标记

### 使用指南
``` javascript
import { Tag } from 'zanm';

Vue.use(Tag);
```

### 代码演示

#### 基础用法
通过 type 属性控制 Tag 颜色，默认为灰色

```html
<zvm-tag>标签</zvm-tag>
<zvm-tag type="danger">标签</zvm-tag>
<zvm-tag type="success">标签</zvm-tag>
<zvm-tag type="primary">标签</zvm-tag>
```

#### 空心样式
设置`plain`属性设置为空心样式

```html
<zvm-tag plain>标签</zvm-tag>
<zvm-tag plain type="danger">标签</zvm-tag>
<zvm-tag plain type="primary">标签</zvm-tag>
<zvm-tag plain type="success">标签</zvm-tag>
```

#### 圆角样式
通过`mark`设置为圆角样式

```html
<zvm-tag mark>标签</zvm-tag>
<zvm-tag mark type="danger">标签</zvm-tag>
<zvm-tag mark type="primary">标签</zvm-tag>
<zvm-tag mark type="success">标签</zvm-tag>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 类型，可选值为`primary` `success` `danger` | `String` | `''`|
| plain | 是否为空心样式 | `Boolean` | `false` |
| mark | 是否为圆角样式 | `Boolean` | `false` |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义 Tag 显示内容 |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
