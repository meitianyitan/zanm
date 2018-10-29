<template>
  <cell center :title="title" :border="border" :class="b()">
    <zvm-switch v-bind="$props" @input="$emit('input', $event)" />
  </cell>
</template>

<script>
import ZanSwitch from '../switch';
import Cell from '../cell';
import create from '../utils/create';

export default create({
  name: 'switch-cell',

  components: {
    ZanSwitch,
    Cell
  },

  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '26px'
    }
  },

  watch: {
    value() {
      this.$emit('change', this.value);
    }
  }
});
</script>
