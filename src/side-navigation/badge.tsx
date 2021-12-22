import React from 'react';

import { badgeStyle } from './styles';

type BadgeProps = {
  children: React.ReactNode;
};

function Badge({ children }: BadgeProps) {
  return <span css={badgeStyle()}>{children}</span>;
}

export default Badge;
