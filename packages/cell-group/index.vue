<template>
  <div :class="[b(), { 'zan-hairline--top-bottom': border }]">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});
</script>
