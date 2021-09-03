import Icon from './icon-base';

type ColumnsProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Columns({ size, ...restProps }: ColumnsProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 14V4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5Zm2 0h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5v10ZM3 2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"
      />
    </Icon>
  );
}

export default Columns;
