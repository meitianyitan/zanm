## 贡献指南

首先感谢你使用 Zanm。

这篇指南会指导你如何为 Zanm 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。

### Bugs

- 在你报告一个 bug 之前，请先确认这个问题已经在 issue 中有记录或者已被修复
- 报告 bug 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

### Pull Request 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### 编码风格

在参与 Zanm 开发时，请遵守约定的单文件组件风格指南，指南内容节选自 [Vue 官方风格指南](https://cn.vuejs.org/v2/style-guide)

#### **组件数据**

组件的 data 必须是一个函数。

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

#### **单文件组件文件名称**

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

```
// bad
mycomponent.vue
myComponent.vue

// good
my-component.vue
MyComponent.vue
```

#### **紧密耦合的组件名**

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

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

#### **自闭合组件**

在单文件组件中没有内容的组件应该是自闭合的。

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

#### **Prop 名大小写**

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

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

#### **Props 换行**

多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

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

#### **指令缩写**

指令缩写，用 `:` 表示 `v-bind:` ，用 `@` 表示 `v-on:`

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

#### **Props 顺序**

标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

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

#### **组件选项的顺序**

组件选项应该有统一的顺序。

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

#### **组件选项中的空行**

组件选项较多时，建议在属性之间添加空行。

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

#### **单文件组件顶级标签的顺序**

单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。

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

### 开发使用
#### **开发流程**
获取源代码：
```bash
git clone https://github.com/meitianyitan/zanm.git

cd zanm
```
在你 clone 了 zanm 的代码后，你还可以运行下面几个常用的命令：

```bash
# 安装依赖
npm run bootstrap

# 在本地运行 Zanm 的网站。
npm run dev

# 检查代码风格
npm run lint

# 运行测试
npm run test
```

浏览器访问 [http://localhost:8888](http://localhost:8888) 就可以看到所有组件的示例了。

#### **目录结构**

- 仓库的组件代码位于 packages 下，每个组件一个文件夹
- 组件样式代码位于 packages/zanm-css/src 下，zanm-css 也会在发布时单独发包
- docs 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run dev 开启文档网站

项目目录大致如下：

```
zanm
├─ build            # 构建脚本
├─ docs             # 文档网站
├─ packages         # 组件文件
├─ test             # 单元测试
└─ types            # 类型定义
```

#### **添加新组件**

在添加新组件时，请按照下面的目录结构组织文件，并在 `docs/src/doc.config.js` 中配置组件名称

```
packages
|- button
|  ├─ demo        # 示例代码
|  ├─ test        # 单元测试
|  ├─ zh-CN.md    # 中文文档
|  ├─ en-US.md    # 英文文档
|  └─ index.vue   # 组件入口
└─ zanm-css
   ├─ index.less   # 样式入口
   └─ button.less  # 组件样式
```

#### **组件文档**

组件文档采用 markdown 格式，内容包括使用示例以及 `API` 等。

**1. 标题规范**

文档标题从 `h2`（即 `##` 标题 ）开始，每往下一级多加一个 `#` 号。

**2. 组件描述**

大标题下面是对组件的一句话简要描述。

**3. 使用指南**

如果组件需要使用指南，放在组件描述下方，另起一个二级标题。

**4. 代码演示**

书写代码演示时，建议从简单用法开始介绍，不要上来就同时使用一大堆 API，会让人觉得难以上手。并且一个示例只演示一个 API 的使用方法，如无特殊需求不要在一个示例中同时演示多个 API 混合使用。

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

**5. API 说明**

组件的 API 说明，请以表格的形式书写，表格包含以下列：

| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------- | -------- | ---------- |
| visible | 是否可见 | bool | `false` |

**6. Event 说明**

组件的 Event 说明，请以表格的形式书写，表格包含以下列：

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮时触发 | event：事件对象 |

#### **组件间相互引用**

比如说 `Dialog` 里面引用了 `Button` 组件，直接写相对路径引用即可。

```js
import Button from '../button';
```

#### **组件创建**

Zanm 中的组件会通过 `create` 方法统一创建，`create` 方法会在选项文件中注入基本的依赖和方法。

```js
import create from '../utils/create';

export default create({
  name: 'button'
});
```
