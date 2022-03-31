import React from 'react';

import Icon from './icon';
import CloseButton from './close-button';
import { notificationStyle, decorStyle, contentStyle } from './styles';

type NotificationCardProps = {
  variant?: 'default' | 'success' | 'warning' | 'error';
  inverted?: boolean;
  closable?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function NotificationCardInternal(
  {
    variant = 'default',
    inverted = false,
    closable = false,
    onClose,
    children,
    ...restProps
  }: NotificationCardProps,
  ref?: React.Ref<HTMLDivElement>,
) {
  return (
    <section
      {...restProps}
      ref={ref}
      role="status"
      css={notificationStyle({ inverted })}
    >
      <div css={decorStyle({ variant })} />
      <Icon variant={variant} />
      <div css={contentStyle()}>{children}</div>
      {closable && <CloseButton inverted={inverted} onClick={onClose} />}
    </section>
  );
}

export default NotificationCardInternal;
