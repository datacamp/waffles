import React, { forwardRef } from 'react';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { textStyle } from './styles';

type TextBaseProps = {
  children: React.ReactNode;
};

type TextProps<T extends React.ElementType = 'span'> =
  PolymorphicComponentProps<T, TextBaseProps>;

type TextComponent = <T extends React.ElementType = 'span'>(
  props: TextProps<T>,
) => JSX.Element | null;

function TextBase<T extends React.ElementType = 'span'>(
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

const Text: TextComponent = forwardRef(TextBase);

export default Text;
