// 此文件是通过 build/build-entry.js 自动生成的
import { wrapper } from './demo-common';

export default {
  'actionsheet': () => wrapper(import('../../packages/actionsheet/demo'), 'actionsheet'),
  'button': () => wrapper(import('../../packages/button/demo'), 'button'),
  'col': () => wrapper(import('../../packages/col/demo'), 'col'),
  'collapse': () => wrapper(import('../../packages/collapse/demo'), 'collapse'),
  'icon': () => wrapper(import('../../packages/icon/demo'), 'icon'),
  'lazyload': () => wrapper(import('../../packages/lazyload/demo'), 'lazyload'),
  'nav-bar': () => wrapper(import('../../packages/nav-bar/demo'), 'nav-bar'),
  'switch': () => wrapper(import('../../packages/switch/demo'), 'switch'),
  'switch-cell': () => wrapper(import('../../packages/switch-cell/demo'), 'switch-cell'),
  'zanm-css': () => wrapper(import('../../packages/zanm-css/demo'), 'zanm-css')
};
