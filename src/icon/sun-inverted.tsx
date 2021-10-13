import Icon from './icon-internal';

type SunInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function SunInverted({ size, ...restProps }: SunInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 14A5 5 0 1 1 9 4a5 5 0 0 1 0 10ZM3 9a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm15 0a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1ZM9 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm0 15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1Zm6.364-12.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM4.757 13.243a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM2.636 2.636a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414Zm10.607 10.607a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414Z"
      />
    </Icon>
  );
}

export default SunInverted;
