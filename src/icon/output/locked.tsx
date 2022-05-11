import Icon from '../icon-internal';

type LockedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Locked({ size, ...restProps }: LockedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6 6V3c0-1.552 1.447-3 2.998-3 1.552 0 2.998 1.448 2.998 3v3H13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1Zm3.996 0V3c0-.448-.551-1-.998-1C8.552 2 8 2.552 8 3v3h1.996ZM5 8v8h8V8H5Zm4 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"
      />
    </Icon>
  );
}

export default Locked;
