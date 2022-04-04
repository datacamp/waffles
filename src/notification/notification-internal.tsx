import React, { useState } from 'react';

import { useAnimateTransition } from '../hooks';
import Card from './card';

type NotificationProps = {
  title: string;
  description?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  inverted?: boolean;
  closable?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function NotificationInternal({
  title,
  description,
  variant = 'default',
  inverted = false,
  closable = false,
  onClose,
  action,
  ...restProps
}: NotificationProps) {
  const [isOpen, setIsOpen] = useState(true);
  const isAnimating = useAnimateTransition(isOpen, 400);

  function handleClose() {
    onClose && onClose();
    setIsOpen(false);
  }

  return isAnimating ? (
    <Card
      {...{ title, description, variant, inverted, closable, action }}
      {...restProps}
      isVisible={isOpen}
      onClose={handleClose}
    />
  ) : null;
}

export default NotificationInternal;
