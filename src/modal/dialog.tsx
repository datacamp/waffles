import React from 'react';

import CloseButton from './close-button';
import { dialogWrapperStyle, dialogStyle } from './styles';

type DialogProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Dialog({ isVisible, onClose, children }: DialogProps) {
  return (
    <div css={dialogWrapperStyle()}>
      <div
        role="dialog"
        aria-modal
        tabIndex={-1}
        css={dialogStyle({ isVisible })}
      >
        <CloseButton onClick={onClose} />
        {children}
      </div>
    </div>
  );
}

export default Dialog;
