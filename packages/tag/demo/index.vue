<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zvm-tag>{{ $t('tag') }}</zvm-tag>
      <zvm-tag type="danger">{{ $t('tag') }}</zvm-tag>
      <zvm-tag type="success">{{ $t('tag') }}</zvm-tag>
      <zvm-tag type="primary">{{ $t('tag') }}</zvm-tag>
    </demo-block>

    <demo-block :title="$t('title2')">
      <zvm-tag plain>{{ $t('tag') }}</zvm-tag>
      <zvm-tag plain type="danger">{{ $t('tag') }}</zvm-tag>
      <zvm-tag plain type="primary">{{ $t('tag') }}</zvm-tag>
      <zvm-tag plain type="success">{{ $t('tag') }}</zvm-tag>
    </demo-block>

    <demo-block :title="$t('title3')">
      <zvm-tag mark>{{ $t('tag') }}</zvm-tag>
      <zvm-tag mark type="danger">{{ $t('tag') }}</zvm-tag>
      <zvm-tag mark type="primary">{{ $t('tag') }}</zvm-tag>
      <zvm-tag mark type="success">{{ $t('tag') }}</zvm-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '空心样式',
      title3: '圆角样式'
    },
    'en-US': {
      title2: 'Plain style',
      title3: 'Mark style'
    }
  }
};
</script>

<style lang="less">
.demo-tag {
  .zvm-tag + .zvm-tag {
    margin-left: 10px;
  }

  .zvm-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
