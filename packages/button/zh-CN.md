## Button 按钮

### 使用指南
``` javascript
import { Button } from 'zanm';

Vue.use(Button);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`warning`、`danger`四种类型，默认为`default`

```html
<zvm-button type="default">默认按钮</zvm-button>
<zvm-button type="primary">主要按钮</zvm-button>
<zvm-button type="warning">警告按钮</zvm-button>
<zvm-button type="danger">危险按钮</zvm-button>
```

#### 朴素按钮

```html
<zvm-button plain type="primary">朴素按钮</zvm-button>
<zvm-button plain type="danger">朴素按钮</zvm-button>
```

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<zvm-button disabled type="primary">禁用状态</zvm-button>
<zvm-button disabled type="danger">禁用状态</zvm-button>
```

#### 加载状态

```html 
<zvm-button loading type="primary" />
<zvm-button loading type="danger" />
```

#### 按钮形状

```html 
<zvm-button square type="primary">方形按钮</zvm-button>
<zvm-button round type="danger">圆形按钮</zvm-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<zvm-button size="large">大号按钮</zvm-button>
<zvm-button size="normal">普通按钮</zvm-button>
<zvm-button size="small">小型按钮</zvm-button>
<zvm-button size="mini">迷你按钮</zvm-button>
```


### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为 `primary` `warning` `danger` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| text | 按钮文字 | `String` | - |
| tag | 按钮 HTML 标签 | `String` | `button` |
| native-type | 按钮类型（原生） | `String` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` |
| disabled | 是否禁用按钮 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| block | 是否为块级元素 | `Boolean` | `false` |
| round | 是否为圆形按钮 | `Boolean` | `false` |
| square | 是否为方形按钮 | `Boolean` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
