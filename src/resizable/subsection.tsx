import React from 'react';

import { subsectionStyle } from './styles';
import Resizable from './resizable';

type SubsectionProps = {
  children: React.ReactNode;
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  dimension?: number;
  isLast?: boolean;
};

function Subsection({
  children,
  orientation,
  dimension,
  isLast = false,
}: SubsectionProps) {
  return (
    <div css={subsectionStyle({ orientation, dimension, isLast })}>
      {children}
    </div>
  );
}

export default Subsection;
