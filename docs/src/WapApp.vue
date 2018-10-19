<template>
  <div>
    <zan-nav-bar
      v-show="title"
      class="zan-doc-nav-bar"
      :title="title"
      left-arrow
      @click-left="onBack"
    >
      <a slot="right" :href="demoLink" target="_blank">
        <zan-icon name="edit" />
      </a>
    </zan-nav-bar>
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

<style lang="postcss">
body {
  color: #333;
  line-height: 1;
  background-color: #fafafa;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.zan-doc-nav-bar {
  .zan-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }

  .zan-nav-bar__left,
  .zan-nav-bar__right {
    cursor: pointer;
  }

  .zan-nav-bar__right {
    font-size: 16px;

    .zan-icon {
      vertical-align: -3px;
    }
  }
}

.zan-doc-demo-section {
  margin-top: -46px;
  padding-top: 46px;
}
</style>
