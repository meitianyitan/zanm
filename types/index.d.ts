import Vue from 'vue';
import { ZanComponent } from './component';

export const version: string;
export function install (vue: typeof Vue): void;
export class Actionsheet extends ZanComponent {}
export class Button extends ZanComponent {}
