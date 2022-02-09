import React from 'react';

import { Text } from '../text';
import { labelStyle } from './styles';

type LabelProps = {
  inverted: boolean;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ inverted, children, ...restProps }: LabelProps) {
  return (
    <Text as="label" {...restProps} css={labelStyle({ inverted })}>
      {children}
    </Text>
  );
}

export default Label;
