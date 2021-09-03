import Icon from './icon-base';

type FilterProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Filter({ size, ...restProps }: FilterProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5.834 13.986A3.001 3.001 0 0 1 0 13a3 3 0 0 1 5.834-.986A.915.915 0 0 1 6 12h11a1 1 0 0 1 0 2H6c-.057 0-.112-.005-.166-.014ZM12.171 4a3.001 3.001 0 1 1 0 2H2a1 1 0 1 1 0-2h10.17ZM15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </Icon>
  );
}

export default Filter;
