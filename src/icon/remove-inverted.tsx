import Icon from './icon-base';

type RemoveInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function RemoveInverted({ size, ...restProps }: RemoveInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z M6,10 L12,10 C12.5522847,10 13,9.55228475 13,9 C13,8.44771525 12.5522847,8 12,8 L6,8 C5.44771525,8 5,8.44771525 5,9 C5,9.55228475 5.44771525,10 6,10 Z"
      />
    </Icon>
  );
}

export default RemoveInverted;
