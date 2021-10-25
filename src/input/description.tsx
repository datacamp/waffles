import React from 'react';

import { Text } from '../text';
import { descriptionStyle } from './styles';

type DescriptionProps = {
  inverted: boolean;
  children: React.ReactNode;
};

function Description({ inverted, children }: DescriptionProps) {
  return <Text css={descriptionStyle({ inverted })}>{children}</Text>;
}

export default Description;
