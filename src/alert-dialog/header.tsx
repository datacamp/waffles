import React from 'react';

import { Dialog } from '../dialog';
import { headerStyle } from './styles';

type HeaderProps = {
  /* Title of the alert dialog. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Header(props: HeaderProps) {
  return <Dialog.Header {...props} css={headerStyle()} />;
}

export default Header;
