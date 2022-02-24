import { Cross } from '../icon';
import { Button } from '../button';
import { closeButtonStyle } from './styles';
import React from 'react';

type CloseButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <Button
      variant="plain"
      size="small"
      icon={<Cross size="xsmall" />}
      aria-label="Close"
      onClick={onClick}
      css={closeButtonStyle()}
    />
  );
}

export default CloseButton;
