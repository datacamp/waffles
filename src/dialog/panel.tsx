import React from 'react';

import Dialog from './dialog';
import CloseButton from './close-button';
import { panelWrapperStyle, panelStyle } from './styles';

type PanelProps = {
  role: NonNullable<React.ComponentProps<typeof Dialog>['role']>;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function Panel({
  role,
  isVisible,
  onClose,
  children,
  ...restProps
}: PanelProps) {
  return (
    <div css={panelWrapperStyle()}>
      <section
        {...restProps}
        role={role}
        aria-modal
        tabIndex={-1}
        css={panelStyle({ isVisible })}
      >
        <CloseButton onClick={onClose} />
        {children}
      </section>
    </div>
  );
}

export default Panel;
