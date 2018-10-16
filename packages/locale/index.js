import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const defaultLang = 'zh-CN';
const locale = {
  install() {
    if (proto.$zanmLang) {
      return;
    }
    Vue.util.defineReactive(proto, '$zanmLang', defaultLang);
    Vue.util.defineReactive(proto, '$zanmMessages', { [defaultLang]: defaultMessages });
  },

  use(lang, messages) {
    proto.$zanmLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$zanmMessages, messages);
  }
};

locale.install();

export default locale;
