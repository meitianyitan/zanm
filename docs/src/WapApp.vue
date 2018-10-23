<template>
  <div>
    <zvm-nav-bar
      v-show="title"
      class="zvm-doc-nav-bar"
      :title="title"
      left-arrow
      @click-left="onBack"
    >
      <a slot="right" :href="demoLink" target="_blank">
        <zvm-icon name="edit" />
      </a>
    </zvm-nav-bar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      const { name } = this.$route.meta;
      return name ? name.replace(/-/g, '') : '';
    },

    demoLink() {
      return `https://github.com/meitianyitan/zanm/tree/dev/packages/${this.$route.meta.path}/demo/index.vue`;
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="less">
body {
  color: #333;
  line-height: 1;
  background-color: #fafafa;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.zvm-doc-nav-bar {
  .zvm-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }

  .zvm-nav-bar__left,
  .zvm-nav-bar__right {
    cursor: pointer;
  }

  .zvm-nav-bar__right {
    font-size: 16px;

    .zvm-icon {
      vertical-align: -3px;
    }
  }
}

.zvm-doc-demo-section {
  margin-top: -46px;
  padding-top: 46px;
}
</style>
