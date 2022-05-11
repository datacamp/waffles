import Icon from '../icon-internal';

type TagProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Tag({ size, ...restProps }: TagProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9.593 2.872 3.035 9.43a1 1 0 0 0 0 1.414l4.242 4.243a1 1 0 0 0 1.414 0l6.559-6.559.294-3.802a2 2 0 0 0-2.148-2.149l-3.803.295ZM9.439.877 13.24.583a4 4 0 0 1 4.297 4.297l-.294 3.803a2 2 0 0 1-.58 1.26L10.106 16.5a3 3 0 0 1-4.243 0L1.62 12.258a3 3 0 0 1 0-4.242l6.56-6.559a2 2 0 0 1 1.26-.58Zm2.788 5.017a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414Z"
      />
    </Icon>
  );
}

export default Tag;
