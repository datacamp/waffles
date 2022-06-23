import React from 'react';

type ContentProps = {
  /* The body content of the empty state component. Usually a mix of Waffles [text](/components/text) or [button](/components/button). */
  children: React.ReactNode;
};

function Content({ children, ...restProps }: ContentProps) {
  return <div {...restProps}>{children}</div>;
}

export default Content;
