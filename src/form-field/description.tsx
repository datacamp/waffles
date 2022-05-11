import React from 'react';

import { Paragraph } from '../paragraph';

import { descriptionStyle } from './styles';

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
