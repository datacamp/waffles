import React from 'react';

import { Portal } from '../portal';
import { toastsStyle } from './styles';

type ToastsProps = {
  children: React.ReactNode;
};

function Toasts({ children }: ToastsProps) {
  return (
    <Portal>
      <ul css={toastsStyle()}>{children}</ul>
    </Portal>
  );
}

export default Toasts;
