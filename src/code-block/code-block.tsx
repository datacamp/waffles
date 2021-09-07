import React from 'react';

import { Code } from '../code';
import { codeBlockStyle } from './styles';

type CodeBlockProps = React.ComponentProps<typeof Code>;

function CodeBlock({ children, ...restProps }: CodeBlockProps) {
  return (
    <Code as="pre" css={codeBlockStyle()} {...restProps}>
      <code>{children}</code>
    </Code>
  );
}

export default CodeBlock;
