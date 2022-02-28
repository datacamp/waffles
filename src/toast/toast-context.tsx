/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

import Toasts from './toasts';
import Toast from './toast';

type ToastsDataset = Record<
  string,
  Omit<React.ComponentProps<typeof Toast>, 'onClose'>
>;

type ShowToastOptions = Omit<
  React.ComponentProps<typeof Toast>,
  'isOpen' | 'onClose'
>;

type ToastContextValue = {
  toast: ({ title, variant, description }: ShowToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue>(undefined!);

type ToastProviderProps = {
  children: React.ReactNode;
};

function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastsDataset>({});

  function toast({
    title,
    variant = 'default',
    description,
  }: ShowToastOptions) {
    const toastId = nanoid(6);

    // Add new toast to toasts hash map under unique ID
    setToasts({
      ...toasts,
      [toastId]: {
        title,
        variant,
        description,
        isOpen: true,
      },
    });
  }

  function handleClose(toastId: string) {
    // Trigger toast closing animation
    setToasts({
      ...toasts,
      [toastId]: {
        ...toasts[toastId],
        isOpen: false,
      },
    });

    // TODO: Actually remove toast from dataset after its closing animation is finished
    // e.g. const { [toastId]: removed, ...restToasts } = toasts;
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      <Toasts>
        {Object.keys(toasts).map((toastId) => {
          return (
            <Toast
              key={toastId}
              {...toasts[toastId]}
              onClose={() => handleClose(toastId)}
            />
          );
        })}
      </Toasts>
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
