// This file is auto gererated by build/build-entry.js
import Actionsheet from './actionsheet';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Icon from './icon';
import Info from './info';
import Lazyload from './lazyload';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';
import Row from './row';
import SwipeCell from './swipe-cell';
import Switch from './switch';
import SwitchCell from './switch-cell';

const version = '0.0.8';
const components = [
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Col,
  Collapse,
  CollapseItem,
  Icon,
  Info,
  Loading,
  Locale,
  NavBar,
  Row,
  SwipeCell,
  Switch,
  SwitchCell
];

const install = Vue => {
  if (install.installed) return;
  components.forEach(Component => {
    Vue.use(Component);
  });
};

// auto install
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
  Col,
  Collapse,
  CollapseItem,
  Icon,
  Info,
  Lazyload,
  Loading,
  Locale,
  NavBar,
  Row,
  SwipeCell,
  Switch,
  SwitchCell
};

export default {
  install,
  version
};
