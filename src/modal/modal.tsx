import React from 'react';

import { Portal } from '../portal';
import Overlay from './overlay';
import Dialog from './dialog';
import Body from './body';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  return isOpen ? (
    <Portal>
      <Overlay isVisible={isOpen} onClose={onClose} />
      <Dialog onClose={onClose}>{children}</Dialog>
    </Portal>
  ) : null;
}

Modal.Body = Body;

export default Modal;
