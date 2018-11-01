import Vue from 'vue';
import { ZvmPopupMixin } from './mixins/popup';

type ToastMessage = string | number;

export type ToastOptions = {
  type?: string;
  mask?: boolean;
  position?: string;
  duration?: number;
  forbidClick?: boolean;
  loadingType?: string;
  message?: ToastMessage;
}

export interface ZvmToast extends Vue, ZvmPopupMixin {
  type: string;
  position: string;
  loadingType: string;
  forbidClick: boolean;
  message: ToastMessage;
}

export interface Toast {
  (message: ToastOptions | ToastMessage, options?: ToastOptions): ZvmToast;
  loading(options?: ToastOptions | ToastMessage): ZvmToast;
  success(options?: ToastOptions | ToastMessage): ZvmToast;
  fail(options?: ToastOptions | ToastMessage): ZvmToast;
  clear(): void;
  install(): void;
  setDefaultOptions(options: ToastOptions): void;
  resetDefaultOptions(): void;
  allowMultiple(allow: boolean): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast
  }
}

export const Toast: Toast;
