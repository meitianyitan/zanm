// 此文件是通过 build/build-entry.js 自动生成的
import { wrapper } from './demo-common';

export default {
  'button': () => wrapper(import('../../packages/button/demo'), 'button'),
  'lazyload': () => wrapper(import('../../packages/lazyload/demo'), 'lazyload')
};