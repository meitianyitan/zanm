// 此文件是通过 build/build-entry.js 自动生成的
import Actionsheet from './actionsheet';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import Icon from './icon';
import Info from './info';
import Lazyload from './lazyload';
import Loading from './loading';
import Locale from './locale';

const version = '0.0.1';
const components = [
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Icon,
  Info,
  Loading,
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
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Icon,
  Info,
  Lazyload,
  Loading,
  Locale
};

export default {
  install,
  version
};
