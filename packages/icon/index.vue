<template>
  <i :class="[classPrefix, `${classPrefix}-${name}`]" :style="style" v-on="$listeners">
    <slot />
    <zvm-info :info="info" />
  </i>
</template>

<script>
import Info from '../info';
import create from '../utils/create-basic';
const prefixCls = 'zvm-icon';

export default create({
  name: 'icon',

  components: {
    [Info.name]: Info
  },

  props: {
    name: String,
    info: [String, Number],
    color: String,
    size: String,
    classPrefix: {
      type: String,
      default: prefixCls
    }
  },

  computed: {
    style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    }
  }
});
</script>
