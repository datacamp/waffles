import DialogInternal from './dialog-internal';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Button from './button';
import CloseButton from './close-button';

const DialogNamespace = Object.assign(DialogInternal, {
  Header,
  Body,
  Footer,
  Button,
  CloseButton,
});

export default DialogNamespace;
