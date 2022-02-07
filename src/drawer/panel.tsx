import React from 'react';

import { Dialog } from '../dialog';
import Drawer from './drawer';
import { panelStyle, panelContentStyle } from './styles';

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
      <div tabIndex={-1} css={panelStyle({ isVisible, placement })} />
      {/* Content only wrapper allows buttons to be fixed at the bottom and be always visible at once*/}
      <section {...restProps} css={panelContentStyle({ isVisible, placement })}>
        <Dialog.CloseButton onClick={onClose} />
        {children}
      </section>
    </>
  );
}

export default Panel;
