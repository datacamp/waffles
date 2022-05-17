import React from 'react';

import { alertDotStyle } from './styles';

type AlertDotProps = React.HTMLAttributes<HTMLDivElement>;

function AlertDot(props: AlertDotProps) {
  return <div {...props} css={alertDotStyle()} data-testid="alert-dot" />;
}

export default AlertDot;
