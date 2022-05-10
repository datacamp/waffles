import React from 'react';

import { errorStyle } from './styles';

import { Text } from '../text';

type ErrorProps = {
  id: string;
  inverted: boolean;
  children: React.ReactNode;
};

function Error({ id, inverted, children }: ErrorProps) {
  return (
    <Text as="p" id={id} css={errorStyle({ inverted })}>
      {children}
    </Text>
  );
}

export default Error;
