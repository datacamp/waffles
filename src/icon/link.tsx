import Icon from './icon-internal';

type LinkProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Link({ size, ...restProps }: LinkProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m6.143 13.209 1.43 1.43a4.5 4.5 0 0 1-5.99-6.698L4.41 5.112a4.5 4.5 0 0 1 6.698 5.991l-1.43-1.43a2.5 2.5 0 0 0-3.854-3.146L2.997 9.355a2.5 2.5 0 0 0 3.146 3.854Zm5.728-8.415-1.43-1.43a4.5 4.5 0 0 1 5.99 6.698l-2.828 2.829A4.5 4.5 0 0 1 6.905 6.9l1.43 1.43a2.5 2.5 0 0 0 3.854 3.146l2.828-2.828a2.5 2.5 0 0 0-3.146-3.854Z"
      />
    </Icon>
  );
}

export default Link;
