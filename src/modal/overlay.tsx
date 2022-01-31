import { overlayStyle } from './styles';

type OverlayProps = {
  isVisible: boolean;
};

function Overlay({ isVisible }: OverlayProps) {
  return <div css={overlayStyle({ isVisible })} data-testid="modal-overlay" />;
}

export default Overlay;
