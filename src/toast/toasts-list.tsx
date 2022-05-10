import React from 'react';

import { toastsListStyle } from './styles';

import { Portal } from '../portal';

type ToastsListProps = {
  offset: string;
  children: React.ReactNode;
};

function ToastsList({ offset, children }: ToastsListProps) {
  return (
    <Portal id="waffles-toast-portal-root">
      <ul data-testid="toasts-list" css={toastsListStyle({ offset })}>
        {children}
      </ul>
    </Portal>
  );
}

export default ToastsList;
