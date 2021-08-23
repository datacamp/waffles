import Icon from './icon-base';

type AttentionCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function AttentionCircle({ size, ...restProps }: AttentionCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 5a1 1 0 1 1 2 0v5a1 1 0 0 1-2 0V5z"
      />
    </Icon>
  );
}

export default AttentionCircle;
