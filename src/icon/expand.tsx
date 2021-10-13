import Icon from './icon-internal';

type ExpandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Expand({ size, ...restProps }: ExpandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M17.995 1.108v7.178a1.026 1.026 0 0 1-2.053 0V2.06l-6.216-.008c-.566 0-1.024-.46-1.022-1.026A1.028 1.028 0 0 1 9.733 0l7.243.01a1.023 1.023 0 0 1 1.02 1.097ZM.005 16.892V9.714a1.026 1.026 0 0 1 2.053 0v6.226l6.216.008c.566 0 1.024.46 1.022 1.026A1.028 1.028 0 0 1 8.267 18l-7.243-.01a1.023 1.023 0 0 1-1.02-1.097Z"
      />
    </Icon>
  );
}

export default Expand;
