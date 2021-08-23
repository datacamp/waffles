import Icon from './icon-base';

type InfoCircleInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function InfoCircleInverted({ size, ...restProps }: InfoCircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18zM9 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1z"
      />
    </Icon>
  );
}

export default InfoCircleInverted;
