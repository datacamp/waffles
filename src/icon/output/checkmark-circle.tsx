import Icon from '../icon-internal';

type CheckmarkCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function CheckmarkCircle({ size, ...restProps }: CheckmarkCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18Zm2.326-11.96a1 1 0 0 1 1.555 1.258L8.773 12.37a1 1 0 0 1-1.534.024l-2.124-2.46a1 1 0 0 1 1.514-1.307l1.342 1.556 3.355-4.144Z"
      />
    </Icon>
  );
}

export default CheckmarkCircle;
