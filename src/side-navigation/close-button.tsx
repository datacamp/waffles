import React from 'react';

import { Cross } from '../icon';
import { closeButtonStyle } from './styles';

type CloseButtonProps = {
  isVisible: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CloseButton({ isVisible, onClick }: CloseButtonProps) {
  return (
    <button
      aria-label="Close"
      onClick={onClick}
      css={closeButtonStyle({ isVisible })}
    >
      <Cross />
    </button>
  );
}

export default CloseButton;
