import Header from './header';
import Footer from './footer';
import Body from './body';
import AlertDialogInternal from './alert-dialog-internal';

import { Dialog } from '../dialog';

const AlertDialogNamespace = Object.assign(AlertDialogInternal, {
  Header,
  Body,
  Footer,
  Button: Dialog.Button,
});

export default AlertDialogNamespace;
