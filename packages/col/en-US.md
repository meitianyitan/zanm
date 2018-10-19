## Layout

Quickly and easily create layouts with `zan-row` and `zan-col`

### Install
``` javascript
import { Row, Col } from 'zanm';

Vue.use(Row).use(Col);
```

### Usage

#### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.


```html
<zan-row>
  <zan-col span="8">span: 8</zan-col>
  <zan-col span="8">span: 8</zan-col>
  <zan-col span="8">span: 8</zan-col>
</zan-row>

<zan-row>
  <zan-col span="4">span: 4</zan-col>
  <zan-col span="10" offset="4">offset: 4, span: 10</zan-col>
  <zan-col span="6">span: 6</zan-col>
</zan-row>

<zan-row>
  <zan-col offset="12" span="12">offset: 12, span: 12</zan-col>
</zan-row>
```


#### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<zan-row gutter="20">
  <zan-col span="8">span: 8</zan-col>
  <zan-col span="8">span: 8</zan-col>
  <zan-col span="8">span: 8</zan-col>
</zan-row>
```

#### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<zan-row type="flex">
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
</zan-row>

<zan-row type="flex" justify="center">
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
</zan-row>

<zan-row type="flex" justify="end">
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
</zan-row>

<zan-row type="flex" justify="space-between">
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
</zan-row>

<zan-row type="flex" justify="space-around">
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
  <zan-col span="6">span: 6</zan-col>
</zan-row>
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
