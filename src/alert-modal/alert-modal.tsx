import { Modal } from '../modal';
import Header from './header';
import Body from './body';
import Footer from './footer';
import { dialogStyle } from './styles';

type AlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function AlertModal({ children, ...restProps }: AlertModalProps) {
  return (
    <Modal {...restProps} role="alertdialog" css={dialogStyle()}>
      {children}
    </Modal>
  );
}

AlertModal.Header = Header;
AlertModal.Body = Body;
AlertModal.Body = Body;
AlertModal.Footer = Footer;
AlertModal.Button = Modal.Button;

export default AlertModal;
