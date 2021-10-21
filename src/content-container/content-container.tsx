import React from 'react';

import { contentContainerStyle } from './styles';

type ContentContainerProps = {
  /* The content to render inside the container. */
  children: React.ReactNode;
  /* Hints whether there is a nav sidebar on the page or not. Changes how the container behaves. When the flag is passed, content is always centered, no matter what the viewport size is. */
  noSidebar?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function ContentContainer({
  children,
  noSidebar = false,
  ...restProps
}: ContentContainerProps) {
  return (
    <div css={contentContainerStyle({ noSidebar })} {...restProps}>
      {children}
    </div>
  );
}

export default ContentContainer;
