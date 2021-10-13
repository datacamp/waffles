import Icon from './icon-internal';

type MenuProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Menu({ size, ...restProps }: MenuProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 6a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2H4Zm0 4a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2H4Zm0 4a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2H4Z"
      />
    </Icon>
  );
}

export default Menu;
