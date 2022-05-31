import React from 'react';

import { Dialog } from '../dialog';

import { panelStyle, panelContentStyle } from './styles';
import Drawer from './drawer';

type PanelProps = {
  isVisible: boolean;
  onClose: () => void;
  placement: NonNullable<React.ComponentProps<typeof Drawer>['placement']>;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

// Incorporate two animated containers to make it work nicely on iOS
function Panel({
  isVisible,
  onClose,
  placement,
  children,
  ...restProps
}: PanelProps) {
  return (
    <>
      {/* Background panel which spans whole device heigh */}
      <div css={panelStyle({ isVisible, placement })} />
      {/* Content only wrapper allows buttons to be fixed at the bottom and be always visible at once */}
      <section
        {...restProps}
        aria-modal
        tabIndex={-1}
        css={panelContentStyle({ isVisible, placement })}
      >
        <Dialog.CloseButton onClick={onClose} />
        {children}
      </section>
    </>
  );
}

export default Panel;
