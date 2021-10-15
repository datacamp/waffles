import React from 'react';

import { Text } from '../text';
import { headingStyle, sizeToElement } from './styles';

type HeadingProps = {
  /* The content of the heading. */
  children: React.ReactNode;
  /* The level of heading used to render this component. Use to fine-tune heading level to preserve correct heading hierarchy on the page. In general, specifying only heading `size` should be enough. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /* Defines the size of the heading. Each size has its default heading level associated with it, e.g. `xxlarge` is rendered as `h1`. */
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium';
  /* Sets the style of the heading suitable for dark backgrounds. */
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
