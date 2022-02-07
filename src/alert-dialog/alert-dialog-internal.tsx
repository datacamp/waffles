import { Dialog } from '../dialog';
import { dialogStyle } from './styles';

type AlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'role'>;

function AlertDialogInternal({ children, ...restProps }: AlertDialogProps) {
  return (
    <Dialog {...restProps} role="alertdialog" css={dialogStyle()}>
      {children}
    </Dialog>
  );
}

export default AlertDialogInternal;
