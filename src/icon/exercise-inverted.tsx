import Icon from './icon-base';

type ExerciseInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function ExerciseInverted({ size, ...restProps }: ExerciseInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4,0 L14,0 C15.6568542,0 17,1.34314575 17,3 L17,15 C17,16.6568542 15.6568542,18 14,18 L4,18 C2.34314575,18 1,16.6568542 1,15 L1,3 C1,1.34314575 2.34314575,0 4,0 Z M6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 L12,8 C12.5522847,8 13,7.55228475 13,7 C13,6.44771525 12.5522847,6 12,6 L6,6 Z M6,10 C5.44771525,10 5,10.4477153 5,11 C5,11.5522847 5.44771525,12 6,12 L12,12 C12.5522847,12 13,11.5522847 13,11 C13,10.4477153 12.5522847,10 12,10 L6,10 Z"
      />
    </Icon>
  );
}

export default ExerciseInverted;
