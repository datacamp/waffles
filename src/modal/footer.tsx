import { footerStyle } from './styles';

type FooterProps = {
  children: React.ReactNode;
};

function Footer({ children }: FooterProps) {
  return <footer css={footerStyle}>{children}</footer>;
}

export default Footer;
