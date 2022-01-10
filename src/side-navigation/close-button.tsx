import React from 'react';

import { Cross } from '../icon';
import { closeButtonStyle } from './styles';

type CloseButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button css={closeButtonStyle()} aria-label="Close" onClick={onClick}>
      <Cross />
    </button>
  );
}

export default CloseButton;
