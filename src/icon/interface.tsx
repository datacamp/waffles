import Icon from './icon-internal';

type InterfaceProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Interface({ size, ...restProps }: InterfaceProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7 14V4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4Zm2 0h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9v10ZM3 2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm6 6h7v2H9V8Z"
      />
    </Icon>
  );
}

export default Interface;
