import Icon from './icon-base';

type AssignmentInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function AssignmentInverted({ size, ...restProps }: AssignmentInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4,0 L14,0 C15.6568542,0 17,1.34314575 17,3 L17,15 C17,16.6568542 15.6568542,18 14,18 L4,18 C2.34314575,18 1,16.6568542 1,15 L1,3 C1,1.34314575 2.34314575,0 4,0 Z M6,8 C5.44771525,8 5,8.44771525 5,9 C5,9.55228475 5.44771525,10 6,10 L12,10 C12.5522847,10 13,9.55228475 13,9 C13,8.44771525 12.5522847,8 12,8 L6,8 Z M8.5,4 L9.5,4 C10.0522847,4 10.5,4.44771525 10.5,5 C10.5,5.55228475 10.0522847,6 9.5,6 L8.5,6 C7.94771525,6 7.5,5.55228475 7.5,5 C7.5,4.44771525 7.94771525,4 8.5,4 Z M6,12 L12,12 C12.5522847,12 13,12.4477153 13,13 C13,13.5522847 12.5522847,14 12,14 L6,14 C5.44771525,14 5,13.5522847 5,13 C5,12.4477153 5.44771525,12 6,12 Z"
      />
    </Icon>
  );
}

export default AssignmentInverted;
