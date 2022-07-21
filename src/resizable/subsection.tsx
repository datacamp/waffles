import React from 'react';

import { subsectionStyle } from './styles';
import Resizable from './resizable';

type SubsectionProps = {
  children: React.ReactNode;
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  isDragging: boolean;
  compensateForSeparator: boolean;
  dimension?: number;
};

function Subsection({
  children,
  orientation,
  isDragging,
  compensateForSeparator,
  dimension,
}: SubsectionProps) {
  return (
    <div
      css={subsectionStyle({
        orientation,
        isDragging,
        compensateForSeparator,
        dimension,
      })}
    >
      {children}
    </div>
  );
}

export default Subsection;
