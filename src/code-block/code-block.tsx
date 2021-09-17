import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Code } from '../code';
import { codeBlockStyle } from './styles';

type CodeBlockProps = React.ComponentProps<typeof Code>;

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
