import React, { forwardRef } from 'react';

import { containerStyle } from './styles';
import Resizable from './resizable';

type ContainerProps = {
  children: React.ReactNode;
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
};

function ContainerInternal(
  { children, orientation }: ContainerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} css={containerStyle({ orientation })}>
      {children}
    </div>
  );
}

const Container = forwardRef(ContainerInternal);

export default Container;
