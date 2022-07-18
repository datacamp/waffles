import React from 'react';

import { dividerStyle } from './styles';

type DividerProps = {
  onStartDrag: React.MouseEventHandler<HTMLDivElement>;
};

function Divider({ onStartDrag }: DividerProps) {
  return (
    <div role="separator" onMouseDown={onStartDrag} css={dividerStyle()}></div>
  );
}

export default Divider;
