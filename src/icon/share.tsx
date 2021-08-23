import Icon from './icon-base';

type ShareProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Share({ size, ...restProps }: ShareProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13.572 10a1 1 0 1 1 0-2H17a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.41a1 1 0 1 1 0 2H2v6h14v-6h-2.428zM8.034 3.419 5.743 5.707a1.002 1.002 0 0 1-1.416-1.415L8.265.36A.998.998 0 0 1 9.791.345l3.949 3.932c.39.39.392 1.023.003 1.415a.998.998 0 0 1-1.413.003l-2.296-2.287-.002 9.593a1 1 0 1 1-2 0l.002-9.582z"
      />
    </Icon>
  );
}

export default Share;
