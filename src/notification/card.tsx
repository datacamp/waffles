import React from 'react';

import Notification from './notification';
import Icon from './icon';
import CloseButton from './close-button';
import { notificationStyle, decorStyle, contentStyle } from './styles';

type CardProps = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
  children: React.ReactNode;
  closeable: boolean;
  onClose?: () => void;
};

function Card({ variant, children, closeable, onClose }: CardProps) {
  return (
    <section role="status" css={notificationStyle({ variant })}>
      <div css={decorStyle({ variant })} />
      <Icon variant={variant} />
      <div css={contentStyle({ closeable })}>{children}</div>
      {closeable && <CloseButton onClick={onClose} />}
    </section>
  );
}

export default Card;
