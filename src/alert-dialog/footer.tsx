import React from 'react';

import { footerStyle } from './styles';

type FooterProps = {
  /* Content of the footer. In most cases, should be one or multiple `AlertDialog.Button` subcomponents. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Footer({ children, ...restProps }: FooterProps) {
  return (
    <footer {...restProps} css={footerStyle()}>
      {children}
    </footer>
  );
}

export default Footer;
