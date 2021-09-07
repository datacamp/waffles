import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { Code } from '../code';
import { codeBlockStyle } from './styles';

type CodeBlockProps = React.ComponentProps<typeof Code>;

function CodeBlock({ children, ...restProps }: CodeBlockProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Code
      as="pre"
      css={codeBlockStyle({ isFocusVisible })}
      tabIndex={0}
      {...restProps}
      {...focusProps}
    >
      <code>{children}</code>
    </Code>
  );
}

export default CodeBlock;
