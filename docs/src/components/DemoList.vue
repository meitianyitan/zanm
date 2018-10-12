<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img alt="" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" >
      <span>Zanm</span>
    </h1>
    <div class="mobile-switch-lang">
      <span :class="{ active: $zanmLang === 'en-US' }" @click="switchLang('en-US')">EN</span>
      <span :class="{ active: $zanmLang === 'zh-CN' }" @click="switchLang('zh_CN')">中文</span>
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
console.log(docConfig, MobileNav);
export default {
  name: '',
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
h2 {
  font-size: 12px;
}
</style>
