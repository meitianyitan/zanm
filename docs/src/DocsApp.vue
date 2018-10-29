<template>
  <div class="app">
    <zvm-doc
      :base="base"
      :config="config"
      active="Vue 组件"
      :simulators="simulators"
      :current-simulator="currentSimulator"
    >
      <router-view @changeDemoURL="onChangeDemoURL" />
    </zvm-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$zanmLang}`;
    },

    config() {
      return docConfig[this.$zanmLang];
    },

    currentSimulator() {
      const { name } = this.$route;
      return name && ~name.indexOf('case') ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>

<style lang="less">
.zvm-doc-intro {
  text-align: center;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-size: 36px;
    line-height: 60px;
    font-weight: normal;
  }

  .zvm-doc-intro__preview {
    font-size: 18px;
    line-height: 60px;
    font-weight: normal;
    display: block;
    color: #22ab28;
    text-decoration: none;
  }

  p {
    font-size: 15px;
    color: #455a64;
  }
}
</style>

