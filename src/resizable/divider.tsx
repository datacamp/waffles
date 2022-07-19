import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { dividerStyle } from './styles';

type DividerProps = {
  onStartDrag: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};

function Divider({ onStartDrag, onKeyDown }: DividerProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      role="separator"
      tabIndex={0}
      {...focusProps}
      onMouseDown={onStartDrag}
      onKeyDown={onKeyDown}
      css={dividerStyle({ isFocusVisible })}
    ></div>
  );
}

export default Divider;
