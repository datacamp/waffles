import React from 'react';

import CloseButton from './close-button';
import {
  dialogScrollWrapperStyle,
  dialogInnerWrapperStyle,
  dialogStyle,
} from './styles';

type DialogProps = {
  onClose: () => void;
  children: React.ReactNode;
};

function Dialog({ onClose, children }: DialogProps) {
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  return (
    <div css={dialogScrollWrapperStyle()} onClick={onClose}>
      <div css={dialogInnerWrapperStyle()}>
        <div
          role="dialog"
          aria-modal
          tabIndex={-1}
          css={dialogStyle()}
          onClick={handleClick}
        >
          <CloseButton onClick={onClose} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
