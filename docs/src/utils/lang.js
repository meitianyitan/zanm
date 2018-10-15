import Locale from '../../../packages/locale';
import zhCN from '../../../packages/locale/lang/zh-CN';
import enUS from '../../../packages/locale/lang/en-US';

const langMap = {
  'en-US': {
    title: 'Zanm - A Mobile UI for Vue.js 2.0',
    messages: enUS
  },
  'zh_CN': {
    title: 'Zanm - 一套基于 Vue.js 的移动端组件库',
    messages: zhCN
  }
};
let currentLang = '';

setLang(getDefaultLang());

function getDefaultLang() {
  const langs = Object.keys(langMap);
  const hash = location.hash;

  for (let i = 0; i < langs.length; i++) {
    if (~hash.indexOf(langs[i])) {
      return langs[i];
    }
  }

  const userLang = localStorage.getItem('ZANM_LANGUAGE') || navigator.language || 'en_US';
  return ~userLang.indexOf('zh-') ? 'zh_CN' : 'en_US';
}

export function setLang(lang) {
  if (currentLang === lang) {
    return;
  }

  currentLang = lang;
  if (window.localStorage) {
    localStorage.setItem('ZANM_LANGUAGE', lang);
  }
  Locale.use(lang, langMap[lang].messages);
  document.title = langMap[lang].title;
}
