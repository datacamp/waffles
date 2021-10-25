import React from 'react';

import { Text } from '../text';
import { descriptionStyle } from './styles';

type DescriptionProps = {
  children: React.ReactNode;
};

function Description({ children }: DescriptionProps) {
  return <Text css={descriptionStyle()}>{children}</Text>;
}

export default Description;
