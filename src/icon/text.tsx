import Icon from './icon-internal';

type TextProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Text({ size, ...restProps }: TextProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2 6a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H2Zm0 4a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2H2Zm0 4a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2H2Z"
      />
    </Icon>
  );
}

export default Text;
