import Icon from './icon-internal';

type CircleInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function CircleInverted({ size, ...restProps }: CircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path fill="currentColor" d="M9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18Z" />
    </Icon>
  );
}

export default CircleInverted;
