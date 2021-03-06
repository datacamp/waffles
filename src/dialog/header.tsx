import React from 'react';

import { Heading } from '../heading';

import { headerStyle } from './styles';

type HeaderProps = {
  /* Title of the modal. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Header({ children, ...restProps }: HeaderProps) {
  return (
    <Heading {...restProps} css={headerStyle()}>
      {children}
    </Heading>
  );
}

export default Header;
