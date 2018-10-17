// 此文件是通过 build/build-entry.js 自动生成的
import Actionsheet from './actionsheet';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Icon from './icon';
import Info from './info';
import Lazyload from './lazyload';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';

const version = '0.0.2';
const components = [
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  Icon,
  Info,
  Loading,
  Locale,
  NavBar
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
  Collapse,
  CollapseItem,
  Icon,
  Info,
  Lazyload,
  Loading,
  Locale,
  NavBar
};

export default {
  install,
  version
};
