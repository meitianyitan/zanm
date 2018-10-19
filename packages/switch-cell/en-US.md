## SwitchCell
`SwitchCell` component is an encapsulation of `Switch` and `Cell`.

### Install
``` javascript
import { SwitchCell } from 'zanm';

Vue.use(SwitchCell);
```

### Usage

#### Basic Usage

```html
<zan-cell-group>
  <zan-switch-cell v-model="checked" title="Title" />
</zan-cell-group>
```

```javascript
export default {
  data() {
    return {
      checked: true
    }
  }
}
```


#### Disabled
use `disabled` property to disable the component

```html
<zan-cell-group>
  <zan-switch-cell v-model="checked" disabled title="Title" />
</zan-cell-group>
```


#### Loading
use `loading` property to keep component in loading state

```html
<zan-cell-group>
  <zan-switch-cell v-model="checked" loading title="Title" />
</zan-cell-group>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| v-model | on-off state of the switch | `Boolean` | - |
| title | the leftside title |  `String` | `''` |
| loading | whether switch is loading |  `Boolean` | `false` |
| disabled | whether to disable switch |  `Boolean` | `false` |
| size | Size of switch | `String` | `26px` |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | triggered when the on-off state is changed | checked: switch is on or not |
