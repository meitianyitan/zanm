<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img class="zvm-doc-intro__logo" src="http://static.sosout.com/images/zanm-logo.svg" alt="zvm-doc-intro__logo" >
      <span>Zanm</span>
    </h1>
    <div class="mobile-switch-lang">
      <span :class="{ active: $zanmLang === 'en-US' }" @click="switchLang('en-US')">EN</span>
      <span :class="{ active: $zanmLang === 'zh-CN' }" @click="switchLang('zh-CN')">中文</span>
    </div>
    <h2 class="zanui-desc">{{ description }}</h2>
    <template v-for="item in navList" v-if="item.showInMobile">
      <mobile-nav
        v-for="(group, index) in item.groups"
        :group="group"
        :base="$zanmLang"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
import { setLang } from '../utils/lang';

export default {
  data() {
    return {
      docConfig
    };
  },

  components: {
    MobileNav
  },

  computed: {
    navList() {
      return this.docConfig[this.$zanmLang].nav || [];
    },

    description() {
      return this.$zanmLang === 'zh-CN' ? '一套基于 Vue.js 的移动端组件库' : 'A Mobile UI for Vue.js 2.0';
    }
  },

  methods: {
    switchLang(lang) {
      const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      setLang(lang);
    }
  }
};
</script>

<style lang="less">
@import '../../../packages/zanm-css/src/common/var.less';

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;

  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .zanui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
  }

  .zanui-desc {
    font-size: 14px;
    color: #455a64;
    margin: 0 0 60px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 11px;
  border: 1px solid $blue;
  border-radius: 3px;
  color: $blue;
  cursor: pointer;

  span {
    width: 32px;
    line-height: 22px;
    text-align: center;
    display: inline-block;

    &.active {
      color: #fff;
      background-color: $blue;
    }
  }
}
</style>
