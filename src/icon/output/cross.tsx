import Icon from '../icon-internal';

type CrossProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Cross({ size, ...restProps }: CrossProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m9.005 7.625 4.83-4.83a.976.976 0 0 1 1.38 1.38l-4.83 4.83 4.82 4.82a.976.976 0 1 1-1.38 1.38l-4.82-4.82-4.83 4.83a.976.976 0 0 1-1.38-1.38l4.83-4.83-4.84-4.84a.976.976 0 1 1 1.38-1.38l4.84 4.84Z"
      />
    </Icon>
  );
}

export default Cross;
