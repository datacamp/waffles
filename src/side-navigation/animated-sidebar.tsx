import React from 'react';

import Overlay from './overlay';
import CloseButton from './close-button';
import { animatedSidebarStyle } from './styles';
import useAnimateTransition from './use-animate-transition';
import { useSidebar } from './sidebar-context';

type AnimatedSidebarProps = React.HTMLAttributes<HTMLDivElement>;

function AnimatedSidebar(props: AnimatedSidebarProps) {
  const { isOpen } = useSidebar();
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <>
      <Overlay />
      <CloseButton />
      <div {...props} css={animatedSidebarStyle({ isVisible: isOpen })} />
    </>
  ) : null;
}

export default AnimatedSidebar;
