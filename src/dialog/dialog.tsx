import Header from './header';
import Footer from './footer';
import DialogInternal from './dialog-internal';
import CloseButton from './close-button';
import Button from './button';
import Body from './body';

const DialogNamespace = Object.assign(DialogInternal, {
  Header,
  Body,
  Footer,
  Button,
  CloseButton,
});

export default DialogNamespace;
