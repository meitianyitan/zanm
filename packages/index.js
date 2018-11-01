// This file is auto gererated by build/build-entry.js
import Actionsheet from './actionsheet';
import Badge from './badge';
import BadgeGroup from './badge-group';
import Button from './button';
import Card from './card';
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
import Tag from './tag';
import Toast from './toast';

const version = '0.1.1';
const components = [
  Actionsheet,
  Badge,
  BadgeGroup,
  Button,
  Card,
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
  SwitchCell,
  Tag,
  Toast
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
  Badge,
  BadgeGroup,
  Button,
  Card,
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
  SwitchCell,
  Tag,
  Toast
};

export default {
  install,
  version
};
