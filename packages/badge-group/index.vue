<template>
  <div :class="b()" class="zvm-hairline--top-bottom">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      badges: []
    };
  }
});
</script>
