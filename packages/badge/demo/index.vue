<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zvm-badge-group :active-key="activeKey">
        <zvm-badge :title="$t('title')" @click="onClick" />
        <zvm-badge :title="$t('title')" @click="onClick" info="8" />
        <zvm-badge :title="$t('title')" @click="onClick" info="99" />
        <zvm-badge :title="$t('title')" @click="onClick" info="99+" />
      </zvm-badge-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名称'
    }
  },

  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="less">
.demo-badge {
  .zvm-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: #fff;

    &::after {
      display: none;
    }
  }

  .zvm-badge {
    width: 85px;
    margin: 0 auto;
  }
}
</style>
