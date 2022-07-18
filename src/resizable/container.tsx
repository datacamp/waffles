import React, { forwardRef } from 'react';

import { wrapperStyle } from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

function ContainerInternal(
  { children }: ContainerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} css={wrapperStyle()}>
      {children}
    </div>
  );
}

const Container = forwardRef(ContainerInternal);

export default Container;
