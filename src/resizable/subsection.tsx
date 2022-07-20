import React from 'react';

import { subsectionStyle } from './styles';
import Resizable from './resizable';

type SubsectionProps = {
  children: React.ReactNode;
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  isDragging: boolean;
  dimension?: number;
  isLast?: boolean;
};

function Subsection({
  children,
  orientation,
  dimension,
  isDragging,
  isLast = false,
}: SubsectionProps) {
  return (
    <div css={subsectionStyle({ orientation, dimension, isDragging, isLast })}>
      {children}
    </div>
  );
}

export default Subsection;
