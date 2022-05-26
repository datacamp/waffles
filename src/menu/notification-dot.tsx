import React from 'react';

import { notificationDotStyle } from './styles';

type NotificationDotProps = React.HTMLAttributes<HTMLDivElement>;

function NotificationDot(props: NotificationDotProps) {
  return (
    <div {...props} css={notificationDotStyle()} data-testid="alert-dot" />
  );
}

export default NotificationDot;
