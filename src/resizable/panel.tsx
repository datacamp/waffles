import React from 'react';

import { subsectionStyle } from './styles';
import Resizable from './resizable';

type PanelProps = {
  children: React.ReactNode;
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  isDragging: boolean;
  compensateForSeparator: boolean;
  dimension?: number;
};

function Panel({
  children,
  orientation,
  isDragging,
  compensateForSeparator,
  dimension,
}: PanelProps) {
  // Because of frequent updates, pass width / height as regular style
  // It prevents emotion from appling new class each time a new value is provided
  const adjustedSize = {
    [orientation === 'vertical' ? 'width' : 'height']: dimension,
  };

  return (
    <div
      css={subsectionStyle({
        orientation,
        isDragging,
        compensateForSeparator,
      })}
      style={adjustedSize}
    >
      {children}
    </div>
  );
}

export default Panel;
