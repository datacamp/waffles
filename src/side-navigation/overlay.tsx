import React from 'react';
import { overlayStyle } from './styles';

type OverlayProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

function Overlay({ onClick }: OverlayProps) {
  return <div onClick={onClick} css={overlayStyle()} />;
}

export default Overlay;
