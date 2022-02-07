import React from 'react';

import { overlayStyle } from './styles';

type OverlayProps = {
  isVisible: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Overlay({ isVisible, ...restProps }: OverlayProps) {
  return <div {...restProps} css={overlayStyle({ isVisible })} />;
}

export default Overlay;
