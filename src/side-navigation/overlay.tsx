import { usePreventScroll } from '@react-aria/overlays';

import { useSidebar } from './sidebar-context';
import { overlayStyle } from './styles';

function Overlay() {
  const { isOpen, onClose } = useSidebar();
  usePreventScroll();

  return (
    <div
      onClick={onClose}
      css={overlayStyle({ isVisible: isOpen })}
      data-testid="side-navigation-menu-overlay"
    />
  );
}

export default Overlay;
