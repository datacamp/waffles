import React from 'react';

import { Text } from '../text';
import { errorStyle } from './styles';

type ErrorProps = {
  children: React.ReactNode;
};

function Error({ children }: ErrorProps) {
  return <Text css={errorStyle()}>{children}</Text>;
}

export default Error;
