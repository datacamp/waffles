import React from 'react';

import { badgeStyle, innerContentStyle } from './styles';

type BadgeProps = {
  /* Determines the variant of the badge, based on the set of predefined background colors. */
  variant:
    | 'green'
    | 'navy'
    | 'white'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'grey'
    | 'greySubtle';
  /* The text content of the badge. */
  children: React.ReactNode;
  /* Defines the font size of the text content. In general default `medium` size should be used. */
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLSpanElement>;

function Badge({
  variant,
  size = 'medium',
  children,
  ...restProps
}: BadgeProps) {
  return (
    <span {...restProps} css={badgeStyle({ variant, size })}>
      <span css={innerContentStyle()}>{children}</span>
    </span>
  );
}

export default Badge;
