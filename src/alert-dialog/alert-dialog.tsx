import { Dialog } from '../dialog';
import AlertDialogInternal from './alert-dialog-internal';
import Header from './header';
import Body from './body';
import Footer from './footer';

const AlertDialogNamespace = Object.assign(AlertDialogInternal, {
  Header,
  Body,
  Footer,
  Button: Dialog.Button,
});

export default AlertDialogNamespace;
