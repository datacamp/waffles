import React from 'react';

import Overlay from './overlay';
import CloseButton from './close-button';
import { animatedSidebarStyle } from './styles';
import useAnimateTransition from './use-animate-transition';

type AnimatedSidebarProps = {
  isOpen: boolean;
  onClose: React.MouseEventHandler;
} & React.HTMLAttributes<HTMLDivElement>;

function AnimatedSidebar({
  isOpen,
  onClose,
  ...restProps
}: AnimatedSidebarProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <>
      <Overlay onClick={onClose} isVisible={isOpen} />
      <CloseButton onClick={onClose} isVisible={isOpen} />
      <div {...restProps} css={animatedSidebarStyle({ isVisible: isOpen })} />
    </>
  ) : null;
}

export default AnimatedSidebar;
