import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Code } from '../code';
import { codeBlockStyle } from './styles';

type CodeBlockProps = {
  /* The content of the code block. */
  children: React.ReactNode;
  /* Defines the font size of the code block. */
  size?: 'medium' | 'large';
  /* Sets the style of the code block suitable for dark backgrounds. */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLPreElement>;

function CodeBlock({ children, ...restProps }: CodeBlockProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Code
      as="pre"
      {...mergeProps(focusProps, restProps)}
      css={codeBlockStyle({ isFocusVisible })}
      tabIndex={0}
    >
      <code>{children}</code>
    </Code>
  );
}

export default CodeBlock;
