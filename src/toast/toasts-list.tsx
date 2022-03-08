import React from 'react';

import { Portal } from '../portal';
import { toastsListStyle } from './styles';

type ToastsListProps = {
  offset: string;
  children: React.ReactNode;
};

function ToastsList({ offset, children }: ToastsListProps) {
  return (
    <Portal>
      <ul data-testid="toasts-list" css={toastsListStyle({ offset })}>
        {children}
      </ul>
    </Portal>
  );
}

export default ToastsList;
