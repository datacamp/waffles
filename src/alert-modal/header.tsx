import React from 'react';

import { Modal } from '../modal';
import { headerStyle } from './styles';

type HeaderProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Header(props: HeaderProps) {
  return <Modal.Header {...props} css={headerStyle()} />;
}

export default Header;
