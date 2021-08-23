import Icon from './icon-base';

type ListProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function List({ size, ...restProps }: ListProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6 6a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2H6zm0 4a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2H6zm0 4a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2H6zM1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"
      />
    </Icon>
  );
}

export default List;
