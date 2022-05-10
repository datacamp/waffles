import React from 'react';

import { headerStyle } from './styles';

import { Heading } from '../heading';

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
