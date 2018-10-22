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
<zvm-cell-group>
  <zvm-switch-cell v-model="checked" title="Title" />
</zvm-cell-group>
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
<zvm-cell-group>
  <zvm-switch-cell v-model="checked" disabled title="Title" />
</zvm-cell-group>
```


#### Loading
use `loading` property to keep component in loading state

```html
<zvm-cell-group>
  <zvm-switch-cell v-model="checked" loading title="Title" />
</zvm-cell-group>
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
