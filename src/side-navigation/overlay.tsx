import { useSidebar } from './sidebar-context';

import { Overlay as OverlayBase } from '../overlay';

function Overlay() {
  const { isOpen, onClose } = useSidebar();

  return (
    <OverlayBase
      isVisible={isOpen}
      onClick={onClose}
      data-testid="side-navigation-menu-overlay"
    />
  );
}

export default Overlay;
