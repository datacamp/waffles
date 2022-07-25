import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { dividerStyle, dividerSeparatorStyle } from './styles';
import Resizable from './resizable';

type DividerProps = {
  layout: NonNullable<React.ComponentProps<typeof Resizable>['layout']>;
  isDragging: boolean;
  showSeparator: boolean;
  inverted: boolean;
  onStartDrag: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};

// Internally we call draggable hitbox between sections a divider, and separator is a thin line inside divider
function Divider({
  layout,
  isDragging,
  showSeparator,
  inverted,
  onStartDrag,
  onKeyDown,
}: DividerProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      role="separator"
      aria-orientation={layout === 'column' ? 'vertical' : 'horizontal'}
      tabIndex={0}
      {...focusProps}
      onMouseDown={onStartDrag}
      onKeyDown={onKeyDown}
      css={dividerStyle({ layout, isFocusVisible, isDragging, inverted })}
    >
      <div css={dividerSeparatorStyle({ layout, showSeparator, inverted })} />
    </div>
  );
}

export default Divider;
