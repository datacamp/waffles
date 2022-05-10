import React from 'react';

import { textStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type TextBaseProps = {
  /* A text content of the component. */
  children: React.ReactNode;
};

export type TextProps<T extends React.ElementType = 'span'> =
  PolymorphicComponentProps<T, TextBaseProps>;

function TextInternal<T extends React.ElementType = 'span'>(
  { as, children, ...restProps }: TextProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'span';

  return (
    <Element ref={ref} css={textStyle()} {...restProps}>
      {children}
    </Element>
  );
}

export default TextInternal;
