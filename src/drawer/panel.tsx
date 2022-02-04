import React from 'react';

import { Modal } from '../modal';
import { panelStyle, panelContentStyle } from './styles';

type PanelProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

// Incorporate two animated panels to make it work nicely on iOS
function Panel({ isVisible, onClose, children, ...restProps }: PanelProps) {
  return (
    <>
      {/* Background panel which spans whole device heigh */}
      <div tabIndex={-1} css={panelStyle({ isVisible })} />
      {/* Content only wrapper allows buttons to be fixed at the bottom and be always visible at once*/}
      <section {...restProps} css={panelContentStyle({ isVisible })}>
        <Modal.CloseButton onClick={onClose} />
        {children}
      </section>
    </>
  );
}

export default Panel;
