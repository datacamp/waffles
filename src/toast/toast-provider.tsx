// Split context and provider to enable auto-generated props docs
import { useState } from 'react';
import { nanoid } from 'nanoid';

import ToastsList from './toasts-list';
import { ToastContext } from './toast-context';
import Toast from './toast';

import type { ToastOptions } from './toast-context';

type ToastsDataset = Record<
  string,
  Omit<React.ComponentProps<typeof Toast>, 'onClose'>
>;

type ToastProviderProps = {
  /* Turns off toasts auto-hide functionality. When flag is passed, notifications persist and must be dismissed manually. */
  disableAutoHide?: boolean;
  /* The number of milliseconds to wait before automatically dismissing a notification. By default it is 6000 milliseconds. */
  autoHideDuration?: number;
  /* Sets the distance from the top of the page to the toasts container. By default `54px` is used, which is the most common app header height. */
  offset?: string;
  /* Content of an app. Generally, it is enough to wrap the whole app close to its root with a single `ToastProvider`. */
  children: React.ReactNode;
};

function ToastProvider({
  disableAutoHide = false,
  autoHideDuration = 6000,
  offset = '54px',
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
        <ToastsList offset={offset}>
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

export default ToastProvider;
