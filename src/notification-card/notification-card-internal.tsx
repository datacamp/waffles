import React from 'react';

import { notificationStyle, decorStyle, contentStyle } from './styles';
import Icon from './icon';
import CloseButton from './close-button';

type NotificationCardProps = {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'upgrade';
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
      <div css={decorStyle({ variant, inverted })} />
      <Icon {...{ variant, inverted }} />
      <div css={contentStyle({ closable })}>{children}</div>
      {closable && <CloseButton inverted={inverted} onClick={onClose} />}
    </section>
  );
}

export default NotificationCardInternal;
