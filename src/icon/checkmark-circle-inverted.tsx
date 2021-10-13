import Icon from './icon-internal';

type CheckmarkCircleInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function CheckmarkCircleInverted({
  size,
  ...restProps
}: CheckmarkCircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18Zm2.326-11.96-3.355 4.143L6.63 8.627a1 1 0 1 0-1.514 1.307l2.124 2.461a1 1 0 0 0 1.534-.024l4.108-5.073a1 1 0 0 0-1.555-1.259Z"
      />
    </Icon>
  );
}

export default CheckmarkCircleInverted;
