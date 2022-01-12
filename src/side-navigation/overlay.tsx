import { useSidebar } from './sidebar-context';
import { overlayStyle } from './styles';

function Overlay() {
  const { isOpen, onClose } = useSidebar();

  return <div onClick={onClose} css={overlayStyle({ isVisible: isOpen })} />;
}

export default Overlay;
