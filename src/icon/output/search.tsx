import Icon from '../icon-internal';

type SearchProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Search({ size, ...restProps }: SearchProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m13.26 12.303 4.408 3.953a1 1 0 0 1-1.336 1.488L11.78 13.66a7.5 7.5 0 1 1 1.482-1.358ZM7.5 13a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      />
    </Icon>
  );
}

export default Search;
