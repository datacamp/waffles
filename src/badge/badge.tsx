import React from 'react';

import { badgeStyle, innerContentStyle } from './styles';

type BadgeProps = {
  color: string;
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLSpanElement>;

function Badge({ color, size = 'medium', children, ...restProps }: BadgeProps) {
  return (
    <span {...restProps} css={badgeStyle({ color, size })}>
      <span css={innerContentStyle()}>{children}</span>
    </span>
  );
}

export default Badge;
