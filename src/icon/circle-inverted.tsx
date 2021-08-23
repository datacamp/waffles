import Icon from './icon-base';

type CircleInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function CircleInverted({ size, ...restProps }: CircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z"
      />
    </Icon>
  );
}

export default CircleInverted;
