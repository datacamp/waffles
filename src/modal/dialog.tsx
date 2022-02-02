import React from 'react';

import Modal from './modal';
import CloseButton from './close-button';
import { dialogWrapperStyle, dialogStyle } from './styles';

type DialogProps = {
  role: NonNullable<React.ComponentProps<typeof Modal>['role']>;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Dialog({
  role,
  isVisible,
  onClose,
  children,
  ...restProps
}: DialogProps) {
  return (
    <div css={dialogWrapperStyle()}>
      <section
        {...restProps}
        role={role}
        aria-modal
        tabIndex={-1}
        css={dialogStyle({ isVisible })}
      >
        <CloseButton onClick={onClose} />
        {children}
      </section>
    </div>
  );
}

export default Dialog;
