<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <zan-button type="primary">{{ $t('primary') }}</zan-button>
        <zan-button type="danger">{{ $t('danger') }}</zan-button>
      </div>
      <zan-button type="default">{{ $t('default') }}</zan-button>
      <zan-button type="warning">{{ $t('warning') }}</zan-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <zan-button plain type="primary">{{ $t('plain') }}</zan-button>
      <zan-button plain type="danger">{{ $t('plain') }}</zan-button>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <zan-button disabled type="primary">{{ $t('disabled') }}</zan-button>
      <zan-button disabled type="danger">{{ $t('disabled') }}</zan-button>
    </demo-block>

    <demo-block :title="$t('loading')">
      <zan-button loading type="primary" />
      <zan-button loading type="danger" />
    </demo-block>

    <demo-block :title="$t('shape')">
      <zan-button type="primary" square>{{ $t('square') }}</zan-button>
      <zan-button type="danger" round>{{ $t('round') }}</zan-button>
    </demo-block>

    <demo-block :title="$t('size')">
      <zan-button size="large">{{ $t('large') }}</zan-button>
      <zan-button size="normal">{{ $t('normal') }}</zan-button>
      <zan-button size="small">{{ $t('small') }}</zan-button>
      <zan-button size="mini">{{ $t('mini') }}</zan-button>
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

<style lang="postcss">
.demo-button {
  .zan-button {
    user-select: none;

    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }

    .zan-loading {
      margin: 0 18px;
    }
  }

  .zan-doc-demo-block {
    padding: 0 15px;
  }

  .zan-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 10px;
  }
}
</style>
