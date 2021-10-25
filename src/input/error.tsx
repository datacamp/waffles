import React from 'react';

import { Text } from '../text';
import { errorStyle } from './styles';

type ErrorProps = {
  inverted: boolean;
  children: React.ReactNode;
};

function Error({ inverted, children }: ErrorProps) {
  return <Text css={errorStyle({ inverted })}>{children}</Text>;
}

export default Error;
