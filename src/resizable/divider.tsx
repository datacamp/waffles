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
  onStartDrag: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};

function Divider({
  orientation,
  isDragging,
  showSeparator,
  onStartDrag,
  onKeyDown,
}: DividerProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      role="separator"
      tabIndex={0}
      {...focusProps}
      onMouseDown={onStartDrag}
      onKeyDown={onKeyDown}
      css={dividerStyle({ orientation, isFocusVisible, isDragging })}
    >
      <div css={dividerSeparatorStyle({ orientation, showSeparator })} />
    </div>
  );
}

export default Divider;
