<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zan-collapse v-model="active1">
        <zan-collapse-item :title="$t('title1')">{{ $t('content1') }}</zan-collapse-item>
        <zan-collapse-item :title="$t('title2')">{{ $t('content2') }}</zan-collapse-item>
        <zan-collapse-item :title="$t('title3')" disabled>{{ $t('content3') }}</zan-collapse-item>
      </zan-collapse>
    </demo-block>

    <demo-block :title="$t('accordion')">
      <zan-collapse v-model="active2" accordion>
        <zan-collapse-item :title="$t('title1')">{{ $t('content1') }}</zan-collapse-item>
        <zan-collapse-item :title="$t('title2')">{{ $t('content2') }}</zan-collapse-item>
        <zan-collapse-item :title="$t('title3')">{{ $t('content3') }}</zan-collapse-item>
      </zan-collapse>
    </demo-block>

    <demo-block :title="$t('titleSlot')">
      <zan-collapse v-model="active3">
        <zan-collapse-item>
          <div slot="title">{{ $t('title1') }}<zan-icon name="question" /></div>
          {{ $t('content1') }}
        </zan-collapse-item>
        <zan-collapse-item :title="$t('title2')" :value="$t('content')" icon="shop">
          {{ $t('content2') }}
        </zan-collapse-item>
      </zan-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      title1: '有赞微商城',
      title2: '有赞零售',
      title3: '有赞美业',
      content1: '提供多样店铺模板，快速搭建网上商城',
      content2: '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失',
      content3: '线上拓客，随时预约，贴心顺手的开单收银'
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      title1: 'Title1',
      title2: 'Title2',
      title3: 'Title3',
      content1: 'Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.',
      content2: 'When someone walk out your life, let them. They are just making more room for someone else better to walk in.',
      content3: 'The world is big and life is short. Live the life the way you want.'
    }
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="postcss">
@import "../../../packages/zanm-css/src/common/var.css";

.demo-collapse {
  .zan-collapse-item__content {
    font-size: 13px;
    line-height: 1.5;
    color: $gray-darker;
  }

  .zan-icon-question {
    color: $blue;
    vertical-align: -3px;
    margin-left: 5px;
    font-size: 15px;
  }
}
</style>
