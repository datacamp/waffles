import { Heading } from '../heading';
import { headerStyle } from './styles';

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return <Heading css={headerStyle}>{children}</Heading>;
}

export default Header;
