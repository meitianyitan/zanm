<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zan-row>
        <zan-col span="8">span: 8</zan-col>
        <zan-col span="8">span: 8</zan-col>
        <zan-col span="8">span: 8</zan-col>
      </zan-row>

      <zan-row>
        <zan-col span="4">span: 4</zan-col>
        <zan-col span="10" offset="4">offset: 4, span: 10</zan-col>
      </zan-row>

      <zan-row>
        <zan-col offset="12" span="12">offset: 12, span: 12</zan-col>
      </zan-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <zan-row gutter="20">
        <zan-col span="8">span: 8</zan-col>
        <zan-col span="8">span: 8</zan-col>
        <zan-col span="8">span: 8</zan-col>
      </zan-row>
    </demo-block>

    <demo-block :title="$t('title3')">
      <zan-row type="flex">
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
      </zan-row>

      <zan-row type="flex" justify="center">
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
      </zan-row>

      <zan-row type="flex" justify="end">
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
      </zan-row>

      <zan-row type="flex" justify="space-between">
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
      </zan-row>

      <zan-row type="flex" justify="space-around">
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
        <zan-col span="6">span: 6</zan-col>
      </zan-row>
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
  .zan-doc-demo-block {
    padding: 0 15px;
  }

  .zan-doc-demo-block__title {
    padding-left: 0;
  }

  .zan-col {
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
