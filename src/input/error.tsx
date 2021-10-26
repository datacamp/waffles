import React from 'react';

import { Text } from '../text';
import { errorStyle } from './styles';

type ErrorProps = {
  id: string;
  inverted: boolean;
  children: React.ReactNode;
};

function Error({ id, inverted, children }: ErrorProps) {
  return (
    <Text id={id} css={errorStyle({ inverted })}>
      {children}
    </Text>
  );
}

export default Error;
