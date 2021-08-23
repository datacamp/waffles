import Icon from './icon-base';

type TabProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Tab({ size, ...restProps }: TabProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M16,9 L9,9 L9,4 L3,4 C2.44771525,4 2,4.44771525 2,5 L2,13 C2,13.5522847 2.44771525,14 3,14 L15,14 C15.5522847,14 16,13.5522847 16,13 L16,9 Z M18,7.54545455 L18,13 C18,14.6568542 16.6568542,16 15,16 L3,16 C1.34314575,16 9.9475983e-14,14.6568542 4.26325641e-14,13 L4.26325641e-14,5 C-4.26325641e-14,3.34314575 1.34314575,2 3,2 L11,2 L15,2 C16.6568542,2 18,3.34314575 18,5 L18,7.54545455 Z M11,4 L11,7 L16,7 L16,5 C16,4.44771525 15.5522847,4 15,4 L11,4 Z"
      />
    </Icon>
  );
}

export default Tab;
