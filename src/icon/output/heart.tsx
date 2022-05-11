import Icon from '../icon-internal';

type HeartProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Heart({ size, ...restProps }: HeartProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m14.643 9.265.114-.083A2.832 2.832 0 0 0 16 6.835a2.843 2.843 0 0 0-2.846-2.84 2.843 2.843 0 0 0-2.44 1.378c-.778 1.287-2.65 1.287-3.427 0a2.844 2.844 0 0 0-2.44-1.378A2.843 2.843 0 0 0 2 6.835a2.83 2.83 0 0 0 1.209 2.323l.089.067 5.701 4.504 5.644-4.464ZM9 4.343c.418-.637.887-1.134 1.408-1.492A4.831 4.831 0 0 1 13.154 2 4.84 4.84 0 0 1 18 6.835c0 1.66-.838 3.123-2.114 3.994L9.62 15.784a1.002 1.002 0 0 1-1.242 0L2.056 10.79A4.826 4.826 0 0 1 0 6.835 4.84 4.84 0 0 1 4.846 2c1.02 0 1.966.314 2.746.85.52.359.99.856 1.408 1.493Z"
      />
    </Icon>
  );
}

export default Heart;
