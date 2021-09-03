import Icon from './icon-base';

type ArrowUpProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ArrowUp({ size, ...restProps }: ArrowUpProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M10 4.42 10.002 16a1 1 0 0 1-2 0L8 4.41 4.704 7.696a.998.998 0 1 1-1.41-1.417l4.948-4.93a.998.998 0 0 1 1.527.012l4.938 4.933a1 1 0 0 1 0 1.414c-.391.39-1.025.39-1.416 0l-3.29-3.287Z"
      />
    </Icon>
  );
}

export default ArrowUp;
