import React from 'react';

import { Text } from '../text';

import { labelStyle } from './styles';
import FormField from './form-field';

type LabelProps = {
  inverted: boolean;
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ inverted, size, children, ...restProps }: LabelProps) {
  return (
    <Text as="label" {...restProps} css={labelStyle({ inverted, size })}>
      {children}
    </Text>
  );
}

export default Label;
