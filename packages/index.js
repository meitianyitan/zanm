// 此文件是通过 build/build-entry.js 自动生成的
import Button from './button';
import Lazyload from './lazyload';
import Locale from './locale';

const version = '0.0.1';
const components = [
  Button,
  Locale
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Lazyload,
  Locale
};

export default {
  install,
  version
};