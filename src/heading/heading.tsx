import React from 'react';

import { Text } from '../text';
import { headingStyle, sizeToElement } from './styles';

type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium';
} & React.HTMLAttributes<HTMLHeadingElement>;

function Heading({ as, size = 'xlarge', ...restProps }: HeadingProps) {
  return (
    <Text
      as={as ? as : sizeToElement({ size })}
      css={headingStyle({ size })}
      {...restProps}
    />
  );
}

export default Heading;
