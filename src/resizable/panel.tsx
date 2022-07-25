import React from 'react';

import { panelStyle } from './styles';
import Resizable from './resizable';

type PanelProps = {
  children: React.ReactNode;
  layout: NonNullable<React.ComponentProps<typeof Resizable>['layout']>;
  isDragging: boolean;
  compensateForSeparator: boolean;
  dimension?: number;
};

function Panel({
  children,
  layout,
  isDragging,
  compensateForSeparator,
  dimension,
}: PanelProps) {
  // Because of frequent updates, pass width / height as regular style
  // It prevents emotion from applying new class each time a new value is provided
  const adjustedSize = {
    [layout === 'column' ? 'width' : 'height']: dimension,
  };

  return (
    <div
      css={panelStyle({
        layout,
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
