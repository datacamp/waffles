import React from 'react';

import { animatedSidebarStyle } from './styles';
import { useSidebar } from './sidebar-context';
import Overlay from './overlay';
import CloseButton from './close-button';

import { Portal } from '../portal';
import { useAnimateTransition } from '../hooks';

type AnimatedSidebarProps = React.HTMLAttributes<HTMLDivElement>;

function AnimatedSidebar(props: AnimatedSidebarProps) {
  const { isOpen } = useSidebar();
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <Portal id="waffles-side-navigation-portal-root">
      <Overlay />
      <CloseButton />
      <div {...props} css={animatedSidebarStyle({ isVisible: isOpen })} />
    </Portal>
  ) : null;
}

export default AnimatedSidebar;
