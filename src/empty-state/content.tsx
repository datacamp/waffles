import React from 'react';

import { contentStyle } from './styles';

type ContentBaseProps = {
  /* The body content of the empty state component. */
  children: React.ReactNode;
};

function Content({ children, ...restProps }: ContentBaseProps) {
  return (
    <div css={contentStyle} {...restProps}>
      {children}
    </div>
  );
}

export default Content;
