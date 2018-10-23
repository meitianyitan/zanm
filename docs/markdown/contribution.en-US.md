## Contributing

Thank you for using.

The following is a set of guidelines for contributing to Zanm. Please spend several minutes in reading these guidelines before you create an issue or pull request.

### Bugs

- Before you reporting a bug, please make sure you've searched exists issues or has been repaired.
- When you report a bug, describe the problem you are experiencing in a short language and add the environment and recurrence steps when the problem occurs.

### Pull Request

- If you encounter problems, it is recommended to keep your PR small enough to ensure that a PR solves only one problem or only adds a feature.
- When adding components or modifying existing components, be sure to add or modify the test code to ensure the stability of the code.
- In the PR, add the appropriate description, and associate the relevant Issue.

### Coding style

When participating in zanm development, please follow the agreed single-document component style guide, which is excerpted from [Vue official style guide](https://cn.vuejs.org/v2/style-guide)

#### **Component data**

The data for the component must be a function.

```js
// bad
export default {
  data: {
    foo: 'bar'
  }
}

// good
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

#### **Single-file component filename**
A single-file component's file name should either always start with a word capitalization (PascalCase), or it will always be a horizontal line connection (kebab-case).

```
// bad
mycomponent.vue
myComponent.vue

// good
my-component.vue
MyComponent.vue
```

#### **Tightly coupled component names**

Child components that are tightly coupled with the parent component should be named with the parent component name as a prefix.

```
// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue
```

#### **Self-closing components**

Components that do not have content in a single-file component should be self-closing.

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

#### **Prop name uppercase and lowercase**

When declaring prop, the name should always use camelCase, and kebab-case should always be used in the template.

```js
// bad
export default {
  props: {
    'greeting-text': String
  }
};

// good
export default {
  props: {
    greetingText: String
  }
}
```

```html
<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />
```

#### **Props line break**

Multiple Props elements should be composed in multiple lines, one row per Props, and a single line for the Closing tab.

```html
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```

#### **instruction abbreviation**

instruction abbreviation, with `:` means `v-bind:`, with `@` means `v-on:`:

```html
<!-- bad -->
<input
  v-bind:value="value"
  v-on:input="onInput"
>

<!-- good -->
<input
  :value="value"
  @input="onInput"
>
```

#### **Props Order**

The Props of the label should have a uniform order, followed by directives, attributes, and events.

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

#### **The order of component options**

Component options should be in a uniform order.

```js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
};
```

#### **Blank lines in Component options**

When there are more component options, it is recommended that you add blank lines between attributes.

```js
export default {
  computed: {
    formattedValue() {
      // ...
    },

    styles() {
      // ...
    }
  },

  methods: {
    onInput() {
      // ...
    },

    onChange() {
      // ...
    }
  }
};
```

#### **Order of single-file component top-level labels**

Single-file components should always keep the order of the top-level labels consistent and leave blank lines between the labels.

```html
<template>
...
</template>

<script>
/* ... */
</script>

<style>
/* ... */
</style>
```

### Development usage

#### **Development Workflow**
Get Source code：
```bash
git clone https://github.com/meitianyitan/zanm.git

cd zanm
```
After cloning zanm. Then, you can run several commands:

```bash
# install dependencies
npm run bootstrap

# runs Zanm website locally
npm run dev

# checks the code style
npm run lint

# runs the complete test suite
npm run test
```

The browser accesses [http://localhost:8888](http://localhost:8888) o see an example of all the components.

#### **Project structure**

- The component code for the warehouse is located under packages, one folder per component
- The component style code is located under packages/zanm-css/src, and zanm-css will be contracted separately at the time of publication.
- The docs directory is the code for the document web site, which you can run in the directory under catalog to open the documentation web site.

The project directory is roughly as follows:

```
zanm
├─ build            # Build Scripts
├─ docs             # Document Web site
├─ packages         # Component files
├─ test             # Unit Test
└─ types            # Type definition
```

#### **Create a new component**

When creating a new component, organize the file according to the directory structure below and configure the component name in `docs/src/doc.config.js`.

```
packages
|- button
|  ├─ demo        # Sample code
|  ├─ test        # Unit Test
|  ├─ zh-CN.md    # Chinese documents
|  ├─ en-US.md    # English documents
|  └─ index.vue   # Component entry
└─ zanm-css
   ├─ index.css   # Style entry
   └─ button.css  # Component style
```

#### **Component documentation**

The component documentation is in `markdown` format, which includes examples of usage and `API`, among other things.

**1. Title specification**

The document title starts with `h2` (`##` title) and adds a `#` to each lower level.

**2. Component description**

The headline below is a short description of the component.

**3. User Guide**

If the component requires a guide, place it under the component description and start with a level two heading.

**4. Code Demo**

When writing code demos, it is recommended to start with simple usage, and not to come up with a bunch of APIs at the same time, making it difficult to get started. And an example only demonstrates the use of an API, such as no special requirements do not demonstrate in one example multiple APIs mixed use.

```html
<zvm-button :size="size">
  Large
</zvm-button>
```

```javascript
export default {
  data() {
    return {
      size: 'large'
    };
  }
};
```

**5. API**

API description of the component, please write it as a table containing the following columns:

| Attribute | Description | Type | Default |
| ------------ | ------------- | -------- | ---------- |
| disabled | Whether to disable | Boolean | `false` |

**6. Event**

For an Event description of the component, write it as a table containing the following columns:

| Event | Description | Arguments |
|-----------|-----------|-----------|
| click | Triggered when click button and not disabled or loading | - |

#### **Inter-component referencing**

For example, `Dialog` refers to the ` Button` component and writes the relative path reference directly.

```js
import Button from '../button';
```

#### **Component creation**

The components in the Zanm are created uniformly by the `create` method, and the `create` method injects basic dependencies and methods into the options file.

```js
import create from '../utils/create';

export default create({
  name: 'button'
});
```
