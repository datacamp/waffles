import React from 'react';

import { labelStyle } from './styles';

type LabelProps = {
  children: React.ReactNode;
};

function Label({ children }: LabelProps) {
  return <label css={labelStyle()}>{children}</label>;
}

export default Label;
