import React from 'react';

import { contentStyle } from './styles';

type ContentProps = {
  /* The body content of the empty state component. Usually a mix of [text](/components/text) or [button](/components/button). */
  children: React.ReactNode;
};

function Content({ children, ...restProps }: ContentProps) {
  return (
    <div css={contentStyle} {...restProps}>
      {children}
    </div>
  );
}

export default Content;
