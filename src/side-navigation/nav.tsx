import { navStyle } from './styles';

type NavProps = {
  /* Content of the sidebar navigation section, either `SideNavigation.Category` or custom components. */
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
