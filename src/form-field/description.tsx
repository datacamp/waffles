import React from 'react';

import { Paragraph } from '../paragraph';

import { descriptionStyle } from './styles';
import FormField from './form-field';

type DescriptionProps = {
  inverted: boolean;
  size: NonNullable<React.ComponentProps<typeof FormField>['size']>;
  children: React.ReactNode;
};

function Description({ inverted, size, children }: DescriptionProps) {
  return (
    <Paragraph css={descriptionStyle({ size })} inverted={inverted}>
      {children}
    </Paragraph>
  );
}

export default Description;
