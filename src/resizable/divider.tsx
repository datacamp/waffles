import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { dividerStyle } from './styles';
import Resizable from './resizable';

type DividerProps = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  onStartDrag: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};

function Divider({ orientation, onStartDrag, onKeyDown }: DividerProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      role="separator"
      tabIndex={0}
      {...focusProps}
      onMouseDown={onStartDrag}
      onKeyDown={onKeyDown}
      css={dividerStyle({ orientation, isFocusVisible })}
    ></div>
  );
}

export default Divider;
