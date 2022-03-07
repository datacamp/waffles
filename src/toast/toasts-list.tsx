import React from 'react';

import { Portal } from '../portal';
import { toastsListStyle } from './styles';

type ToastsListProps = {
  children: React.ReactNode;
};

function ToastsList({ children }: ToastsListProps) {
  return (
    <Portal>
      <ul data-testid="toasts-list" css={toastsListStyle()}>
        {children}
      </ul>
    </Portal>
  );
}

export default ToastsList;
