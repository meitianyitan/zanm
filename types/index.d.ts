import Vue from 'vue';
import { ZvmComponent } from './component';
import { Toast } from './toast';

export const version: string;
export function install (vue: typeof Vue): void;
export class Actionsheet extends ZvmComponent {}
export class Badge extends ZvmComponent {}
export class Button extends ZvmComponent {}
export class Cell extends ZvmComponent {}
export class Row extends ZvmComponent {}

export {
    Toast
}
