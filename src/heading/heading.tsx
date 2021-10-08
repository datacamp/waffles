import React from 'react';

import { Text } from '../text';
import { headingStyle, sizeToElement } from './styles';

type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium';
  inverted?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Heading({
  as,
  size = 'xlarge',
  inverted = false,
  ...restProps
}: HeadingProps) {
  return (
    <Text
      as={as ? as : sizeToElement({ size })}
      css={headingStyle({ size, inverted })}
      {...restProps}
    />
  );
}

export default Heading;
