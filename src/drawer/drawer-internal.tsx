import React from 'react';
import { FocusOn } from 'react-focus-on';

import { useAnimateTransition } from '../hooks';
import { Portal } from '../portal';
import { Overlay } from '../overlay';
import Panel from './panel';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  placement?: 'left' | 'right';
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function DrawerInternal({
  isOpen,
  onClose,
  placement = 'left',
  children,
  ...restProps
}: DrawerProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <Portal>
      <Overlay isVisible={isOpen} data-testid="drawer-overlay" />
      <FocusOn
        onClickOutside={onClose}
        onEscapeKey={onClose}
        autoFocus
        returnFocus
      >
        <Panel
          isVisible={isOpen}
          onClose={onClose}
          placement={placement}
          {...restProps}
        >
          {children}
        </Panel>
      </FocusOn>
    </Portal>
  ) : null;
}

export default DrawerInternal;
