import React from 'react';

import { Modal } from '../modal';
import { panelStyle } from './styles';

type PanelProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Panel({ isVisible, onClose, children, ...restProps }: PanelProps) {
  return (
    <section {...restProps} tabIndex={-1} css={panelStyle({ isVisible })}>
      <Modal.CloseButton onClick={onClose} />
      {children}
    </section>
  );
}

export default Panel;
