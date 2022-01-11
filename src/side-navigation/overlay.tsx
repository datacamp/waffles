import React from 'react';
import { overlayStyle } from './styles';

type OverlayProps = {
  isVisible: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

function Overlay({ isVisible, onClick }: OverlayProps) {
  return <div onClick={onClick} css={overlayStyle({ isVisible })} />;
}

export default Overlay;
