import Icon from './icon-base';

type ClockProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Clock({ size, ...restProps }: ClockProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7.98 9.022 8 4.995a1 1 0 0 1 2 .01l-.016 3.022H12a1 1 0 0 1 0 2H8.98a1 1 0 0 1-1-1.005zM9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18z"
      />
    </Icon>
  );
}

export default Clock;
