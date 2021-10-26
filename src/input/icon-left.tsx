import React from 'react';

import Input from './input';
import { iconLeftStyle } from './styles';

type IconLeftProps = {
  size: NonNullable<React.ComponentProps<typeof Input>['size']>;
  inverted: boolean;
  children: React.ReactNode;
};

function IconLeft({ size, inverted, children }: IconLeftProps) {
  return <div css={iconLeftStyle({ size, inverted })}>{children}</div>;
}

export default IconLeft;
