import React from 'react';

import { Portal } from '../portal';
import { useAnimateTransition } from '../hooks';

import { animatedSidebarStyle, animatedSidebarContentStyle } from './styles';
import { useSidebar } from './sidebar-context';
import Overlay from './overlay';
import CloseButton from './close-button';

type AnimatedSidebarProps = React.HTMLAttributes<HTMLDivElement>;

// Incorporate two animated containers to make it work nicely on iOS
function AnimatedSidebar({ children, ...restProps }: AnimatedSidebarProps) {
  const { isOpen } = useSidebar();
  const isAnimating = useAnimateTransition(isOpen, 300);

  return (
    <Portal>
      {isAnimating && (
        <>
          <Overlay />
          <CloseButton />
          {/* Background sidebar which spans whole device heigh */}
          <div
            {...restProps}
            css={animatedSidebarStyle({ isVisible: isOpen })}
          />
          {/* Content only wrapper animated separetely */}
          <div css={animatedSidebarContentStyle({ isVisible: isOpen })}>
            {children}
          </div>
        </>
      )}
    </Portal>
  );
}

export default AnimatedSidebar;
