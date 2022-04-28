import React from 'react';
import { FocusOn } from 'react-focus-on';

import { useAnimateTransition } from '../hooks';
import { Portal } from '../portal';
import { Overlay } from '../overlay';
import Panel from './panel';

type DrawerProps = {
  /* Determines if the drawer is open. */
  isOpen: boolean;
  /* Handler called when the drawer will close. */
  onClose: () => void;
  /* Side from which the drawer originates from. */
  placement?: 'left' | 'right';
  /* Content of the drawer. In general, drawer's own subcomponents should be used: `Drawer.Header`, `Drawer.Body`, and `Drawer.Footer`. */
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
    <Portal id="waffles-dialog-portal-root">
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
