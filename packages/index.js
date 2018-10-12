// This file is auto gererated by build/build-entry.js
import Actionsheet from './actionsheet';
import Button from './button';
import Lazyload from './lazyload';

const version = '0.0.1';
const components = [
  Actionsheet,
  Button
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
  Actionsheet,
  Button,
  Lazyload
};

export default {
  install,
  version
};
