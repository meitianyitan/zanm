<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <zvm-button type="primary">{{ $t('primary') }}</zvm-button>
        <zvm-button type="danger">{{ $t('danger') }}</zvm-button>
      </div>
      <zvm-button type="default">{{ $t('default') }}</zvm-button>
      <zvm-button type="warning">{{ $t('warning') }}</zvm-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <zvm-button plain type="primary">{{ $t('plain') }}</zvm-button>
      <zvm-button plain type="danger">{{ $t('plain') }}</zvm-button>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <zvm-button disabled type="primary">{{ $t('disabled') }}</zvm-button>
      <zvm-button disabled type="danger">{{ $t('disabled') }}</zvm-button>
    </demo-block>

    <demo-block :title="$t('loading')">
      <zvm-button loading type="primary" />
      <zvm-button loading type="danger" />
    </demo-block>

    <demo-block :title="$t('shape')">
      <zvm-button type="primary" square>{{ $t('square') }}</zvm-button>
      <zvm-button type="danger" round>{{ $t('round') }}</zvm-button>
    </demo-block>

    <demo-block :title="$t('size')">
      <zvm-button size="large">{{ $t('large') }}</zvm-button>
      <zvm-button size="normal">{{ $t('normal') }}</zvm-button>
      <zvm-button size="small">{{ $t('small') }}</zvm-button>
      <zvm-button size="mini">{{ $t('mini') }}</zvm-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round'
    }
  }
};
</script>

<style lang="less">
.demo-button {
  .zvm-button {
    user-select: none;

    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }

    .zvm-loading {
      margin: 0 18px;
    }
  }

  .zvm-doc-demo-block {
    padding: 0 15px;
  }

  .zvm-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 10px;
  }
}
</style>
