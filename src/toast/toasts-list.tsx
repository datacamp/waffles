import React from 'react';

import { Portal } from '../portal';
import { toastsListStyle } from './styles';

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
