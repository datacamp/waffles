import Icon from './icon-base';

type CircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Circle({ size, ...restProps }: CircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18z"
      />
    </Icon>
  );
}

export default Circle;
