import Icon from './icon-base';

type MobileProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Mobile({ size, ...restProps }: MobileProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5.5,2 L5.5,16 L12.5,16 L12.5,2 L5.5,2 Z M4.5,0 L13.5,0 C14.0522847,0 14.5,0.44771525 14.5,1 L14.5,17 C14.5,17.5522847 14.0522847,18 13.5,18 L4.5,18 C3.94771525,18 3.5,17.5522847 3.5,17 L3.5,1 C3.5,0.44771525 3.94771525,0 4.5,0 Z M8.5,13 L9.5,13 C10.0522847,13 10.5,13.4477153 10.5,14 C10.5,14.5522847 10.0522847,15 9.5,15 L8.5,15 C7.94771525,15 7.5,14.5522847 7.5,14 C7.5,13.4477153 7.94771525,13 8.5,13 Z"
      />
    </Icon>
  );
}

export default Mobile;
