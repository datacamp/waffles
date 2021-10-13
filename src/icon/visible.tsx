import Icon from './icon-internal';

type VisibleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Visible({ size, ...restProps }: VisibleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 14c3.866 0 7-4.367 7-5s-3.134-5-7-5-7 4.102-7 5c0 .898 3.134 5 7 5Zm0 2c-4.209 0-9-4.303-9-7s4.791-7 9-7c4.142 0 9 4.49 9 7s-4.858 7-9 7Zm0-4a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
    </Icon>
  );
}

export default Visible;
