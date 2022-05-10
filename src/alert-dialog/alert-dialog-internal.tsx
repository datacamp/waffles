import { dialogStyle } from './styles';

import { Dialog } from '../dialog';

type AlertDialogProps = {
  /* Determines if the alert dialog is open. */
  isOpen: boolean;
  /* Handler called when the alert dialog will close. */
  onClose: () => void;
  /* Content of the alert dialog. In general, alert dialog's own subcomponents should be used: `AlertDialog.Header`, `AlertDialog.Body`, and `AlertDialog.Footer`. */
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
