// 此文件是通过 build/build-entry.js 自动生成的
import { wrapper } from './demo-common';

export default {
  'actionsheet': () => wrapper(import('../../packages/actionsheet/demo'), 'actionsheet'),
  'button': () => wrapper(import('../../packages/button/demo'), 'button'),
  'collapse': () => wrapper(import('../../packages/collapse/demo'), 'collapse'),
  'icon': () => wrapper(import('../../packages/icon/demo'), 'icon'),
  'lazyload': () => wrapper(import('../../packages/lazyload/demo'), 'lazyload'),
  'nav-bar': () => wrapper(import('../../packages/nav-bar/demo'), 'nav-bar'),
  'zanm-css': () => wrapper(import('../../packages/zanm-css/demo'), 'zanm-css')
};
