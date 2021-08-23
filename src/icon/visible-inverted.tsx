import Icon from './icon-base';

type VisibleInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function VisibleInverted({ size, ...restProps }: VisibleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path d="M9 16c-4.209 0-9-4.303-9-7s4.791-7 9-7c4.142 0 9 4.49 9 7s-4.858 7-9 7zm0-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </Icon>
  );
}

export default VisibleInverted;
