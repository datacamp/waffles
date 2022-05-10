import React from 'react';

import { headerStyle } from './styles';

import { Dialog } from '../dialog';

type HeaderProps = {
  /* Title of the alert dialog. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Header(props: HeaderProps) {
  return <Dialog.Header {...props} css={headerStyle()} />;
}

export default Header;
