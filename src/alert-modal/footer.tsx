import React from 'react';

import { footerStyle } from './styles';

type FooterProps = {
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
