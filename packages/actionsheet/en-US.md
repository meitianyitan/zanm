## Actionsheet

### Install
``` javascript
import { Actionsheet } from 'zanm';

Vue.use(Actionsheet);
```

### Usage

#### Basic Usage
Use `actions` prop to set options of actionsheet. 

```html
<zvm-actionsheet
  v-model="show"
  :actions="actions"
  @select="onSelect"
/>
```

```javascript
export default {
  data() {
    return {
      show: false,
      actions: [
        {
          name: 'Option'
        },
        {
          name: 'Option',
          description: 'Description'
        },
        {
          loading: true
        },
        {
          name: 'Disabled Option',
          disabled: true
        }
      ]
    };
  },

  methods: {
    onSelect(item) {
      this.show = false;
      Toast(item.name);
    }
  }
}
```

#### Actionsheet with cancel button

```html
<zvm-actionsheet
  v-model="show"
  :actions="actions"
  cancel-text="Cancel"
  @select="onSelect"
  @cancel="onCancel"
/>
```

#### Actionsheet with title
Actionsheet will get another style if there is a `title` prop.

```html
<zvm-actionsheet v-model="show" title="Title">
  <p>Content</p>
</zvm-actionsheet>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| actions | Options | `Array` | `[]` |
| title | Title | `String` | - |
| cancel-text | Text of cancel button | `String` | - |
| overlay | Whether to show overlay | `Boolean` | `true` |
| close-on-click-overlay | Whether to close when click overlay | `Boolean` | `true` |
| lazy-render | Whether to lazy render util appeared | `Boolean` | `true` |
| get-container | Return the mount node for actionsheet | `String | () => HTMLElement` | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| select | Triggered when click option | item |
| cancel | Triggered when cancel click | - |

### Data struct of actions

| key | Description |
|-----------|-----------|

