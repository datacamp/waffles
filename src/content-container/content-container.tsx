import React from 'react';

import { contentContainerStyle } from './styles';

type ContentContainerProps = {
  /* The content to render inside the container. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function ContentContainer({ children, ...restProps }: ContentContainerProps) {
  return (
    <div css={contentContainerStyle()} {...restProps}>
      {children}
    </div>
  );
}

export default ContentContainer;
