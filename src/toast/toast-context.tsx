/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext } from 'react';

import Toast from './toast';

export type ToastOptions = Omit<
  React.ComponentProps<typeof Toast>,
  'onClose' | 'disableAutoHide' | 'autoHideDuration'
>;

type ToastContextValue = {
  toast: ({ title, variant, description }: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue>(undefined!);

function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('Make sure to wrap useToast with a ToastProvider.');
  }

  return context;
}

export { ToastContext, useToast };
