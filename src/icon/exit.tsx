import Icon from './icon-base';

type ExitProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Exit({ size, ...restProps }: ExitProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 0a1 1 0 0 1 1 1v3.41a1 1 0 1 1-2 0V2H2v14h5v-2.428a1 1 0 1 1 2 0V17a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h7zm5.725 4.294 3.942 3.958a.997.997 0 0 1-.002 1.498l-3.956 3.957a1 1 0 0 1-1.497-1.322l.083-.094L14.58 10 5 10.002a1 1 0 1 1 0-2L14.593 8l-2.287-2.296a.998.998 0 0 1 .003-1.413 1.001 1.001 0 0 1 1.415.003z"
      />
    </Icon>
  );
}

export default Exit;
