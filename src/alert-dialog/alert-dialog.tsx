import { Dialog } from '../dialog';
import Header from './header';
import Body from './body';
import Footer from './footer';
import { dialogStyle } from './styles';

type AlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function AlertDialog({ children, ...restProps }: AlertDialogProps) {
  return (
    <Dialog {...restProps} role="alertdialog" css={dialogStyle()}>
      {children}
    </Dialog>
  );
}

AlertDialog.Header = Header;
AlertDialog.Body = Body;
AlertDialog.Footer = Footer;
AlertDialog.Button = Dialog.Button;

export default AlertDialog;
