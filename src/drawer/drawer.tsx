import DrawerInternal from './drawer-internal';

import { Dialog } from '../dialog';

const DrawerNamespace = Object.assign(DrawerInternal, {
  Header: Dialog.Header,
  Body: Dialog.Body,
  Footer: Dialog.Footer,
  Button: Dialog.Button,
});

export default DrawerNamespace;
