import React from 'react';
import { FocusOn } from 'react-focus-on';

import { useAnimateTransition } from '../hooks';
import { Portal } from '../portal';
import Overlay from './overlay';
import Dialog from './dialog';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Button from './button';
import CloseButton from './close-button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  role?: 'dialog' | 'alertdialog';
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Modal({
  isOpen,
  onClose,
  role = 'dialog',
  children,
  ...restProps
}: ModalProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <Portal>
      <Overlay isVisible={isOpen} data-testid="modal-overlay" />
      <FocusOn
        onClickOutside={onClose}
        onEscapeKey={onClose}
        autoFocus
        returnFocus
      >
        <Dialog role={role} isVisible={isOpen} onClose={onClose} {...restProps}>
          {children}
        </Dialog>
      </FocusOn>
    </Portal>
  ) : null;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Button = Button;
Modal.CloseButton = CloseButton;
Modal.Overlay = Overlay;

export default Modal;
