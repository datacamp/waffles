import React from 'react';

import { descriptionStyle } from './styles';

import { Paragraph } from '../paragraph';

type DescriptionProps = {
  inverted: boolean;
  children: React.ReactNode;
};

function Description({ inverted, children }: DescriptionProps) {
  return (
    <Paragraph css={descriptionStyle()} inverted={inverted}>
      {children}
    </Paragraph>
  );
}

export default Description;
