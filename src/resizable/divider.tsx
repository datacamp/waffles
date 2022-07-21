import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { dividerStyle, dividerSeparatorStyle } from './styles';
import Resizable from './resizable';

type DividerProps = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  isDragging: boolean;
  showSeparator: boolean;
  inverted: boolean;
  onStartDrag: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};

function Divider({
  orientation,
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
      aria-orientation={orientation}
      tabIndex={0}
      {...focusProps}
      onMouseDown={onStartDrag}
      onKeyDown={onKeyDown}
      css={dividerStyle({ orientation, isFocusVisible, isDragging, inverted })}
    >
      <div
        css={dividerSeparatorStyle({ orientation, showSeparator, inverted })}
      />
    </div>
  );
}

export default Divider;
