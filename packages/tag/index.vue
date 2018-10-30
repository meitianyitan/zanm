<template>
  <span
    :class="[b({
      mark,
      plain,
      [type]: type
    }), {
      'zvm-hairline--surround': plain
    }]"
  >
    <slot />
  </span>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
});
</script>
