import React from 'react';

import { Cross } from '../icon';
import { Button } from '../button';

import { closeButtonStyle } from './styles';

type CloseButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
>;

function CloseButton(props: CloseButtonProps) {
  return (
    <Button
      {...props}
      variant="plain"
      icon={<Cross />}
      aria-label="Close"
      css={closeButtonStyle()}
    />
  );
}

export default CloseButton;
