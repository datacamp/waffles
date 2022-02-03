import React from 'react';
import { FocusOn } from 'react-focus-on';

import { useAnimateTransition } from '../hooks';
import { Portal } from '../portal';
import { Modal } from '../modal';
import Panel from './panel';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  placement?: 'left' | 'right';
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Drawer({ isOpen, onClose, children, ...restProps }: DrawerProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <Portal>
      <Modal.Overlay isVisible={isOpen} data-testid="drawer-overlay" />
      <FocusOn
        onClickOutside={onClose}
        onEscapeKey={onClose}
        autoFocus
        returnFocus
      >
        <Panel isVisible={isOpen} onClose={onClose} {...restProps}>
          {children}
        </Panel>
      </FocusOn>
    </Portal>
  ) : null;
}

Drawer.Header = Modal.Header;
Drawer.Body = Modal.Body;
Drawer.Footer = Modal.Footer;
Drawer.Button = Modal.Button;

export default Drawer;
