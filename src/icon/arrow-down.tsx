import Icon from './icon-base';

type ArrowDownProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ArrowDown({ size, ...restProps }: ArrowDownProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 13.58 7.998 2a1 1 0 0 1 2 0L10 13.59l3.296-3.285a.998.998 0 1 1 1.41 1.417l-4.948 4.93a.998.998 0 0 1-1.527-.012l-4.938-4.933a1 1 0 0 1 0-1.414 1.002 1.002 0 0 1 1.416 0l3.29 3.287z"
      />
    </Icon>
  );
}

export default ArrowDown;
