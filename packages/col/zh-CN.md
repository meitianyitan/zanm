## Grid 栅格

提供了`zvm-row`和`zvm-col`两个组件来进行行列布局。

### 使用指南
``` javascript
import { Row, Col } from 'zanm';

Vue.use(Row).use(Col);
```

### 代码演示

#### 基本用法

我们采用了`24栅格系统`，通过在`Col`上添加`span`属性设置列所占的宽度百分比    
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<zvm-row>
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
</zvm-row>

<zvm-row>
  <zvm-col span="4">span: 4</zvm-col>
  <zvm-col span="10" offset="4">offset: 4, span: 10</zvm-col>
</zvm-row>

<zvm-row>
  <zvm-col offset="12" span="12">offset: 12, span: 12</zvm-col>
</zvm-row>
```

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<zvm-row gutter="20">
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
</zvm-row>
```

#### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```html
<!-- 左对齐 -->
<zvm-row type="flex">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<!-- 居中 -->
<zvm-row type="flex" justify="center">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<!-- 右对齐 -->
<zvm-row type="flex" justify="end">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<!-- 两端对齐 -->
<zvm-row type="flex" justify="space-between">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<!-- 每个元素的两侧间隔相等 -->
<zvm-row type="flex" justify="space-around">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>
```

### API

#### Row

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 布局方式，可选值为`flex` | `String` | - |
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - |
| tag | 自定义元素标签 | `String` | `div` |
| justify | Flex 主轴对齐方式，可选值为 end/center/space-around/space-between | `String` | `start` |
| align | Flex 交叉轴对齐方式，可选值为 center/bottom | `String` | `top` |

#### Col

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| span | 列元素宽度 | `String | Number` | - |
| offset | 列元素偏移距离 | `String | Number` | - |
| tag | 自定义元素标签 | `String` | `div` |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
