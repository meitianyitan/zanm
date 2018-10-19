<template>
  <section class="zan-doc-demo-pages">
    <h2>{{ $t('title') }}</h2>
    <p>{{ $t('description') }}</p>
    <div class="zan-doc-demo-pages__gallery">
      <div
        :class="['zan-doc-demo-pages__item', { 'zan-doc-demo-pages__item--active': index === currentDemo }]"
        v-for="(demo, index) in demos">
        <h4>{{ demo.title }}</h4>
        <a :href="demo.source" target="_blank">{{ $t('source') }}</a>
        <img :src="demo.preview" alt="demo.preview" @click="onChangeDemo(demo, index)" >
      </div>
    </div>
  </section>
</template>

<script>
import { Locale } from '../../../packages';

Locale.add({
  'zh-CN': {
    zanDocDemoPages: {
      title: '示例',
      source: '源代码',
      description: '下面是一些使用 Zanm 搭建的示例页面，点击图片切换至对应示例。',
      myblog: '我的博客'
    }
  },
  'en-US': {
    zanDocDemoPages: {
      title: 'Demo Pages',
      source: 'Source code',
      description: 'Here are some of the demo pages built using Zanm, click on the picture to switch to the corresponding demo.',
      myblog: 'My Blog'
    }
  }
});

export default {
  name: 'zan-doc-demo-pages',

  data() {
    return {
      currentDemo: 0
    };
  },

  computed: {
    demos() {
      return [{
        title: this.$t('myblog'),
        preview: 'http://static.sosout.com/images/blog-shot.png',
        url: 'http://www.sosout.com/',
        source: 'https://github.com/meitianyitan/zanm'
      }];
    }
  },

  beforeMount() {
    this.$emit('changeDemoURL', this.demos[0].url);
  },

  methods: {
    onChangeDemo(demo, index) {
      this.currentDemo = index;
      this.$emit('changeDemoURL', demo.url);
    }
  }
};
</script>

<style lang="postcss">
.zan-doc-demo-pages {
  &__gallery {
    margin-top: 30px;
  }

  &__item {
    width: 28%;
    text-align: center;
    margin-bottom: 40px;
    display: inline-block;

    &:nth-child(3n+1),
    &:nth-child(3n+2) {
      margin-right: 4%;
    }

    h4 {
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
    }

    img {
      width: 100%;
      cursor: pointer;
      border-radius: 3px;
      background-color: #f8f8f8;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }

    a {
      font-size: 12px;
      margin: 4px 0 7px;
      display: inline-block;
    }

    &--active {
      img {
        box-shadow: 0 1px 4px rgba(51, 136, 255, .4), 0 0 0 1px rgba(51, 136, 255, .4);
      }
    }
  }
}
</style>
