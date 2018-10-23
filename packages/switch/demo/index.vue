<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zvm-switch v-model="checked" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <zvm-switch v-model="checked" disabled />
    </demo-block>

    <demo-block :title="$t('loading')">
      <zvm-switch v-model="checked" loading />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <zvm-switch :value="checked2" size="36px" @input="onInput" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '提醒',
      message: '是否切换开关？'
    },
    'en-US': {
      title: 'Confirm',
      message: 'Are you sure to toggle switch?'
    }
  },

  data() {
    return {
      checked: true,
      checked2: true
    };
  },

  methods: {
    onInput(checked) {
      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('message')
      }).then(() => {
        this.checked2 = checked;
      });
    }
  }
};
</script>

<style lang="less">
.demo-switch {
  .zvm-switch {
    margin: 0 15px;
  }
}
</style>
