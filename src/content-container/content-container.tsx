import React from 'react';

import { contentContainerStyle } from './styles';

type ContentContainerProps = {
  children: React.ReactNode;
  noSidebar?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

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
