import Icon from './icon-base';

type AddCircleInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function AddCircleInverted({ size, ...restProps }: AddCircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z M10,8 L10,5 C10,4.44771525 9.55228475,4 9,4 C8.44771525,4 8,4.44771525 8,5 L8,8 L5,8 C4.44771525,8 4,8.44771525 4,9 C4,9.55228475 4.44771525,10 5,10 L8,10 L8,13 C8,13.5522847 8.44771525,14 9,14 C9.55228475,14 10,13.5522847 10,13 L10,10 L13,10 C13.5522847,10 14,9.55228475 14,9 C14,8.44771525 13.5522847,8 13,8 L10,8 Z"
      />
    </Icon>
  );
}

export default AddCircleInverted;
