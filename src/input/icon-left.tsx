import React from 'react';

import { iconLeftStyle } from './styles';
import Input from './input';

type IconLeftProps = {
  size: NonNullable<React.ComponentProps<typeof Input>['size']>;
  inverted: boolean;
  children: React.ReactNode;
};

function IconLeft({ size, inverted, children }: IconLeftProps) {
  return <div css={iconLeftStyle({ size, inverted })}>{children}</div>;
}

export default IconLeft;
