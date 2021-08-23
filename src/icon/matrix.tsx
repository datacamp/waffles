import Icon from './icon-base';

type MatrixProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Matrix({ size, ...restProps }: MatrixProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 4H3a1 1 0 0 0-1 1v3h6V4zm2 0v4h6V5a1 1 0 0 0-1-1h-5zM8 14v-4H2v3a1 1 0 0 0 1 1h5zm2 0h5a1 1 0 0 0 1-1v-3h-6v4zM3 2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"
      />
    </Icon>
  );
}

export default Matrix;
