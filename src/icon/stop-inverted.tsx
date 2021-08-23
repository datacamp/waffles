import Icon from './icon-base';

type StopInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function StopInverted({ size, ...restProps }: StopInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4,2 L14,2 C15.1045695,2 16,2.8954305 16,4 L16,14 C16,15.1045695 15.1045695,16 14,16 L4,16 C2.8954305,16 2,15.1045695 2,14 L2,4 C2,2.8954305 2.8954305,2 4,2 Z"
      />
    </Icon>
  );
}

export default StopInverted;
