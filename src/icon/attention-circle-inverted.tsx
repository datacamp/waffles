import Icon from './icon-base';

type AttentionCircleInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function AttentionCircleInverted({
  size,
  ...restProps
}: AttentionCircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8 5v5a1 1 0 0 0 2 0V5a1 1 0 1 0-2 0z"
      />
    </Icon>
  );
}

export default AttentionCircleInverted;
