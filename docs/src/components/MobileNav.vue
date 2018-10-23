<template>
  <zvm-collapse v-model="active" class="mobile-nav">
    <zvm-collapse-item :title="group.groupName" :name="group.groupName" class="mobile-nav__item">
      <zvm-cell
        v-if="!navItem.disabled"
        v-for="(navItem, index) in group.list"
        :key="index"
        :to="'/' + base + navItem.path"
        :title="navItem.title"
        is-link
      />
    </zvm-collapse-item>
  </zvm-collapse>
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="postcss">
.mobile-nav {
  &__item {
    margin-bottom: 20px;
  }

  &::after {
    display: none;
  }

  .zvm-collapse-item__content {
    padding: 0;
  }

  .zvm-collapse-item__title {
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }
}
</style>
