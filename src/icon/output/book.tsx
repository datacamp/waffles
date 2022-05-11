import Icon from '../icon-internal';

type BookProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Book({ size, ...restProps }: BookProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 12h10V2H4v10Zm12 2v4H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12v14Zm-2 0H4v2h10v-2ZM7 4h4a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2Z"
      />
    </Icon>
  );
}

export default Book;
