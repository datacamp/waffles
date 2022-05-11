import { Cross } from '../icon';

import { closeButtonStyle } from './styles';
import { useSidebar } from './sidebar-context';

function CloseButton() {
  const { isOpen, onClose } = useSidebar();

  return (
    <button
      aria-label="Close"
      onClick={onClose}
      css={closeButtonStyle({ isVisible: isOpen })}
    >
      <Cross size="xlarge" />
    </button>
  );
}

export default CloseButton;
