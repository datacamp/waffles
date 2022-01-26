import { Cross } from '../icon';
import { Button } from '../button';
import { closeButtonStyle } from './styles';

type CloseButtonProps = {
  onClick: () => void;
};

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <Button
      variant="plain"
      onClick={onClick}
      icon={<Cross />}
      aria-label="Close"
      css={closeButtonStyle()}
    />
  );
}

export default CloseButton;
