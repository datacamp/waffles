import React from 'react';

import { badgeStyle } from './styles';

type BadgeProps = {
  color: string;
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLSpanElement>;

function Badge({ color, size = 'medium', children, ...restProps }: BadgeProps) {
  return (
    <span {...restProps} css={badgeStyle({ color, size })}>
      {children}
    </span>
  );
}

export default Badge;
