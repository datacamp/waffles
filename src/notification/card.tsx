import React from 'react';

import Notification from './notification';
import Icon from './icon';
import CloseButton from './close-button';
import { notificationStyle, decorStyle, contentStyle } from './styles';

type CardProps = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
  inverted: boolean;
  closable: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

function Card({ variant, inverted, closable, onClose, children }: CardProps) {
  return (
    <section role="status" css={notificationStyle({ variant, inverted })}>
      <div css={decorStyle({ variant, inverted })} />
      <Icon variant={variant} />
      <div css={contentStyle({ closable })}>{children}</div>
      {closable && <CloseButton inverted={inverted} onClick={onClose} />}
    </section>
  );
}

export default Card;
