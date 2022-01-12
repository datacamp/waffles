import { Cross } from '../icon';
import { useSidebar } from './sidebar-context';
import { closeButtonStyle } from './styles';

function CloseButton() {
  const { isOpen, onClose } = useSidebar();

  return (
    <button
      aria-label="Close"
      onClick={onClose}
      css={closeButtonStyle({ isVisible: isOpen })}
    >
      <Cross />
    </button>
  );
}

export default CloseButton;
