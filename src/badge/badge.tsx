import React from 'react';

import { badgeStyle, innerContentStyle } from './styles';

type BadgeProps = {
  /* A background color of the badge. Could be any [color](/foundation/design-tokens) from Waffles or a custom HEX color code (starts with hash followed by either 3 or 6 digits). */
  color: string;
  /* The text content of the badge. */
  children: React.ReactNode;
  /* Defines the font size of the text content. In general default `medium` size should be used. */
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
