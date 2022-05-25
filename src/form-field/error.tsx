import React from 'react';

import { Text } from '../text';

import { errorStyle } from './styles';
import FormField from './form-field';

type ErrorProps = {
  id: string;
  inverted: boolean;
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
  children: React.ReactNode;
};

function Error({ id, inverted, size, children }: ErrorProps) {
  return (
    <Text as="p" id={id} css={errorStyle({ inverted, size })}>
      {children}
    </Text>
  );
}

export default Error;
