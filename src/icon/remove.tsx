import Icon from './icon-base';

type RemoveProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Remove({ size, ...restProps }: RemoveProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm-3-8a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2H6z"
      />
    </Icon>
  );
}

export default Remove;
