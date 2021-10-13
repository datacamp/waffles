import Icon from './icon-internal';

type ForbiddenProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Forbidden({ size, ...restProps }: ForbiddenProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m14.66 4.88-9.78 9.78a7 7 0 0 0 9.78-9.78Zm-1.397-1.432a7 7 0 0 0-9.816 9.816l9.816-9.816ZM9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18Z"
      />
    </Icon>
  );
}

export default Forbidden;
