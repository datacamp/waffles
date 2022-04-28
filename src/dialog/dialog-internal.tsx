import React from 'react';
import { FocusOn } from 'react-focus-on';

import { useAnimateTransition } from '../hooks';
import { Portal } from '../portal';
import { Overlay } from '../overlay';
import Panel from './panel';

type DialogProps = {
  /* Determines if the dialog is open. */
  isOpen: boolean;
  /* Handler called when the dialog will close. */
  onClose: () => void;
  /* Defines the dialog role. */
  role?: 'dialog' | 'alertdialog';
  /* Content of the dialog. In general, dialog's own subcomponents should be used: `Dialog.Header`, `Dialog.Body`, and `Dialog.Footer`. */
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function DialogInternal({
  isOpen,
  onClose,
  role = 'dialog',
  children,
  ...restProps
}: DialogProps) {
  const isAnimating = useAnimateTransition(isOpen, 300);

  return isAnimating ? (
    <Portal id="waffles-dialog-root">
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

export default DialogInternal;
