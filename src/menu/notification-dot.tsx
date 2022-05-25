import React from 'react';

import { alertDotStyle } from './styles';

type NotificationDotProps = React.HTMLAttributes<HTMLDivElement>;

function NotificationDot(props: NotificationDotProps) {
  return <div {...props} css={alertDotStyle()} data-testid="alert-dot" />;
}

export default NotificationDot;
