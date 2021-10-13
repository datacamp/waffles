import Icon from './icon-internal';

type HeaderProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Header({ size, ...restProps }: HeaderProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2 6h14V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1Zm0 2v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H2Zm1-6h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"
      />
    </Icon>
  );
}

export default Header;
