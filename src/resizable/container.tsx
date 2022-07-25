import React, { forwardRef } from 'react';

import { containerStyle } from './styles';
import Resizable from './resizable';

type ContainerProps = {
  children: React.ReactNode;
  layout: NonNullable<React.ComponentProps<typeof Resizable>['layout']>;
};

function ContainerInternal(
  { children, layout }: ContainerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} css={containerStyle({ layout })}>
      {children}
    </div>
  );
}

const Container = forwardRef(ContainerInternal);

export default Container;
