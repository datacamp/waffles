import React from 'react';
import { FocusOn } from 'react-focus-on';

import { useAnimateTransition } from '../hooks';
import { Portal } from '../portal';
import { Overlay } from '../overlay';
import Panel from './panel';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Button from './button';
import CloseButton from './close-button';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  role?: 'dialog' | 'alertdialog';
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Dialog({
  isOpen,
  onClose,
  role = 'dialog',
  children,
  ...restProps
}: DialogProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <Portal>
      <Overlay isVisible={isOpen} data-testid="dialog-overlay" />
      <FocusOn
        onClickOutside={onClose}
        onEscapeKey={onClose}
        autoFocus
        returnFocus
      >
        <Panel role={role} isVisible={isOpen} onClose={onClose} {...restProps}>
          {children}
        </Panel>
      </FocusOn>
    </Portal>
  ) : null;
}

Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.Button = Button;
Dialog.CloseButton = CloseButton;

export default Dialog;
