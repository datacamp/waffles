/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

import ToastsList from './toasts-list';
import Toast from './toast';

type ToastOptions = Omit<
  React.ComponentProps<typeof Toast>,
  'onClose' | 'disableAutoHide' | 'autoHideDuration'
>;

type ToastsDataset = Record<
  string,
  Omit<React.ComponentProps<typeof Toast>, 'onClose'>
>;

type ToastContextValue = {
  toast: ({ title, variant, description }: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue>(undefined!);

type ToastProviderProps = {
  disableAutoHide?: boolean;
  autoHideDuration?: number;
  children: React.ReactNode;
};

function ToastProvider({
  disableAutoHide = false,
  autoHideDuration = 6000,
  children,
}: ToastProviderProps) {
  // Keep each new toast in a hash map under unique ID
  const [toasts, setToasts] = useState<ToastsDataset>({});
  const toastIds = Object.keys(toasts);

  // Create new toast, exposed by hook
  function toast({ title, variant = 'default', description }: ToastOptions) {
    const toastId = nanoid(6);

    setToasts((toasts) => {
      return {
        ...toasts,
        [toastId]: {
          title,
          variant,
          description,
          disableAutoHide,
          autoHideDuration,
        },
      };
    });
  }

  // Remove toast from hash map by ID
  // Handler is called by toast after exit animation is finished
  // It's called either automatically by internal toast timer or after close button is clicked
  function handleClose(toastId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [toastId]: removed, ...restToasts } = toasts;
    setToasts(restToasts);
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {toastIds.length > 0 && (
        <ToastsList>
          {toastIds.map((toastId) => {
            return (
              <Toast
                key={toastId}
                {...toasts[toastId]}
                onClose={() => handleClose(toastId)}
              />
            );
          })}
        </ToastsList>
      )}
      {children}
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('Make sure to wrap useToast with a ToastProvider.');
  }

  return context;
}

export { ToastProvider, useToast };
