## Grid

Quickly and easily create layouts with `zvm-row` and `zvm-col`

### Install
``` javascript
import { Row, Col } from 'zanm';

Vue.use(Row).use(Col);
```

### Usage

#### Basic Usage

We use a 24 aliquot system divided into equal parts. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.


```html
<zvm-row>
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
</zvm-row>

<zvm-row>
  <zvm-col span="4">span: 4</zvm-col>
  <zvm-col span="10" offset="4">offset: 4, span: 10</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<zvm-row>
  <zvm-col offset="12" span="12">offset: 12, span: 12</zvm-col>
</zvm-row>
```


#### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<zvm-row gutter="20">
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
  <zvm-col span="8">span: 8</zvm-col>
</zvm-row>
```

#### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<zvm-row type="flex">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<zvm-row type="flex" justify="center">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<zvm-row type="flex" justify="end">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<zvm-row type="flex" justify="space-between">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>

<zvm-row type="flex" justify="space-around">
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
  <zvm-col span="6">span: 6</zvm-col>
</zvm-row>
```


### API

#### Row

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| type | Layout type, can be set to `flex` | `String` | - |
| gutter | Grid spacing（px） | `String | Number` | - |
| tag | Custom element tag | `String` | `div` |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | `String` | `start` |
| align | Flex cross axis, be set to  center/bottom | `String` | `top` |

#### Col

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
