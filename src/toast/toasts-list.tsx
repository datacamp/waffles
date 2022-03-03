import React from 'react';

import { Portal } from '../portal';
import { toastsListStyle } from './styles';

type ToastsListProps = {
  children: React.ReactNode;
};

function ToastsList({ children }: ToastsListProps) {
  return (
    <Portal>
      <ul css={toastsListStyle()}>{children}</ul>
    </Portal>
  );
}

export default ToastsList;
