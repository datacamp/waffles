import Icon from './icon-base';

type CrossCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function CrossCircle({ size, ...restProps }: CrossCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18Zm1.414-9 2.122 2.121a1 1 0 0 1-1.415 1.415L9 10.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L7.586 9 5.464 6.879A1 1 0 0 1 6.88 5.464L9 7.586l2.121-2.122a1 1 0 0 1 1.415 1.415L10.414 9Z"
      />
    </Icon>
  );
}

export default CrossCircle;
