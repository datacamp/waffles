import Icon from './icon-base';

type CommandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Command({ size, ...restProps }: CommandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M11 11V7H7v4h4zm0 2H7v1.5A3.5 3.5 0 1 1 3.5 11H5V7H3.5A3.5 3.5 0 1 1 7 3.5V5h4V3.5A3.5 3.5 0 1 1 14.5 7H13v4h1.5a3.5 3.5 0 1 1-3.5 3.5V13zm3.5 0H13v1.5a1.5 1.5 0 1 0 1.5-1.5zM5 13H3.5A1.5 1.5 0 1 0 5 14.5V13zm9.5-8A1.5 1.5 0 1 0 13 3.5V5h1.5zm-11 0H5V3.5A1.5 1.5 0 1 0 3.5 5z"
      />
    </Icon>
  );
}

export default Command;
