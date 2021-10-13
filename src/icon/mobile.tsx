import Icon from './icon-internal';

type MobileProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Mobile({ size, ...restProps }: MobileProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5.5 2v14h7V2h-7Zm-1-2h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Zm4 13h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2Z"
      />
    </Icon>
  );
}

export default Mobile;
