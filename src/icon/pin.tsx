import Icon from './icon-base';

type PinProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Pin({ size, ...restProps }: PinProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18c-2.911 0-8-5.993-8-10a8 8 0 1 1 16 0c0 4.007-5.089 10-8 10zm0-2c1.728 0 6-5.032 6-8A6 6 0 1 0 3 8c0 2.968 4.272 8 6 8zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </Icon>
  );
}

export default Pin;
