import { navStyle } from './styles';

type NavProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Nav({ children, ...restProps }: NavProps) {
  return (
    <nav {...restProps} css={navStyle()}>
      {children}
    </nav>
  );
}

export default Nav;
