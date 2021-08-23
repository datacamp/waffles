import Icon from './icon-base';

type ClockInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ClockInverted({ size, ...restProps }: ClockInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8.98 10.027H12a1 1 0 0 0 0-2H9.984L10 5.005a1 1 0 0 0-2-.01l-.02 4.027a1 1 0 0 0 1 1.005zM9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18z"
      />
    </Icon>
  );
}

export default ClockInverted;
