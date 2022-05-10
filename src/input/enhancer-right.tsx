import React from 'react';

import { enhancerRightStyle } from './styles';
import Input from './input';

type EnhancerRightProps = {
  size: NonNullable<React.ComponentProps<typeof Input>['size']>;
  inverted: boolean;
  children: React.ReactNode;
};

function EnhancerRight({ size, inverted, children }: EnhancerRightProps) {
  return <div css={enhancerRightStyle({ size, inverted })}>{children}</div>;
}

export default EnhancerRight;
