import React from 'react';

import { Text } from '../text';
import { captionStyle } from './styles';

type CaptionProps = {
  children: React.ReactNode;
};

function Caption({ children }: CaptionProps) {
  return <Text css={captionStyle()}>{children}</Text>;
}

export default Caption;
