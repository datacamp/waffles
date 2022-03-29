import React from 'react';

import Notification from './notification';
import Icon from './icon';
import CloseButton from './close-button';
import { notificationStyle, decorStyle, contentStyle } from './styles';

type CardProps = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
  inverted: boolean;
  closeable: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

function Card({ variant, inverted, closeable, onClose, children }: CardProps) {
  return (
    <section role="status" css={notificationStyle({ variant, inverted })}>
      <div css={decorStyle({ variant, inverted })} />
      <Icon variant={variant} />
      <div css={contentStyle({ closeable })}>{children}</div>
      {closeable && <CloseButton inverted={inverted} onClick={onClose} />}
    </section>
  );
}

export default Card;
