import React from 'react';

import { Text } from '../text';
import { captionStyle } from './styles';

type CaptionProps = {
  inverted: boolean;
  children: React.ReactNode;
};

function Caption({ inverted, children }: CaptionProps) {
  return <Text css={captionStyle({ inverted })}>{children}</Text>;
}

export default Caption;
