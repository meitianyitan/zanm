<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zvm-row>
        <zvm-col span="8">span: 8</zvm-col>
        <zvm-col span="8">span: 8</zvm-col>
        <zvm-col span="8">span: 8</zvm-col>
      </zvm-row>

      <zvm-row>
        <zvm-col span="4">span: 4</zvm-col>
        <zvm-col span="10" offset="4">offset: 4, span: 10</zvm-col>
      </zvm-row>

      <zvm-row>
        <zvm-col offset="12" span="12">offset: 12, span: 12</zvm-col>
      </zvm-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <zvm-row gutter="20">
        <zvm-col span="8">span: 8</zvm-col>
        <zvm-col span="8">span: 8</zvm-col>
        <zvm-col span="8">span: 8</zvm-col>
      </zvm-row>
    </demo-block>

    <demo-block :title="$t('title3')">
      <zvm-row type="flex">
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
      </zvm-row>

      <zvm-row type="flex" justify="center">
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
      </zvm-row>

      <zvm-row type="flex" justify="end">
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
      </zvm-row>

      <zvm-row type="flex" justify="space-between">
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
      </zvm-row>

      <zvm-row type="flex" justify="space-around">
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
        <zvm-col span="6">span: 6</zvm-col>
      </zvm-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局'
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout'
    }
  }
};
</script>

<style lang="postcss">
.demo-col {
  .zvm-doc-demo-block {
    padding: 0 15px;
  }

  .zvm-doc-demo-block__title {
    padding-left: 0;
  }

  .zvm-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
