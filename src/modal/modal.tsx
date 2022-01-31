import React from 'react';
import { FocusOn } from 'react-focus-on';

import { useAnimateTransition } from '../hooks';
import { Portal } from '../portal';
import Overlay from './overlay';
import Dialog from './dialog';
import Header from './header';
import Body from './body';
import Footer from './footer';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <Portal>
      <Overlay isVisible={isOpen} />
      <FocusOn
        onClickOutside={onClose}
        onEscapeKey={onClose}
        autoFocus
        returnFocus
      >
        <Dialog isVisible={isOpen} onClose={onClose}>
          {children}
        </Dialog>
      </FocusOn>
    </Portal>
  ) : null;
}
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
