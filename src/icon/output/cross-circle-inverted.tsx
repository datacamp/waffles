import Icon from '../icon-internal';

type CrossCircleInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function CrossCircleInverted({ size, ...restProps }: CrossCircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18Zm1.414-9 2.122-2.121a1 1 0 1 0-1.415-1.415L9 7.586 6.879 5.464A1 1 0 0 0 5.464 6.88L7.586 9l-2.122 2.121a1 1 0 0 0 1.415 1.415L9 10.414l2.121 2.122a1 1 0 0 0 1.415-1.415L10.414 9Z"
      />
    </Icon>
  );
}

export default CrossCircleInverted;
