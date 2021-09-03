import Icon from './icon-base';

type CompassProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Compass({ size, ...restProps }: CompassProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18Zm3.995-12.339-2.121 4.95a.5.5 0 0 1-.263.263l-4.95 2.121a.5.5 0 0 1-.656-.656l2.121-4.95a.5.5 0 0 1 .263-.263l4.95-2.121a.5.5 0 0 1 .656.656ZM8.293 9.707a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Z"
      />
    </Icon>
  );
}

export default Compass;
