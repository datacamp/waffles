import Icon from './icon-base';

type PauseProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Pause({ size, ...restProps }: PauseProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5.5,2 C6.05228475,2 6.5,2.44771525 6.5,3 L6.5,15 C6.5,15.5522847 6.05228475,16 5.5,16 C4.94771525,16 4.5,15.5522847 4.5,15 L4.5,3 C4.5,2.44771525 4.94771525,2 5.5,2 Z M12.5,2 C13.0522847,2 13.5,2.44771525 13.5,3 L13.5,15 C13.5,15.5522847 13.0522847,16 12.5,16 C11.9477153,16 11.5,15.5522847 11.5,15 L11.5,3 C11.5,2.44771525 11.9477153,2 12.5,2 Z"
      />
    </Icon>
  );
}

export default Pause;
