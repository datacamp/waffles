import { overlayStyle } from './styles';

type OverlayProps = {
  isVisible: boolean;
  onClose: () => void;
};

function Overlay({ isVisible, onClose }: OverlayProps) {
  return (
    <div
      onClick={onClose}
      css={overlayStyle({ isVisible })}
      data-testid="modal-overlay"
    />
  );
}

export default Overlay;
