/**
 * Demo Common Mixin && i18n
 */

import Vue from 'Vue';
import i18n from '../../packages/mixins/i18n';
import Zanm, { Lazyload } from '../../packages';
import ZanmDoc, { DemoBlock, DemoSection } from 'vant-doc';
import VueRouter from 'vue-router';
import { Locale } from '../../packages';
import { camelize } from '../../packages/utils';
console.log(Vue, i18n, Zanm, Lazyload, ZanmDoc, DemoBlock, DemoSection, VueRouter, Locale, camelize);
