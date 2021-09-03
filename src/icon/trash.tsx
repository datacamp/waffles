import Icon from './icon-base';

type TrashProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Trash({ size, ...restProps }: TrashProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 6H4v10h10V6H8ZM6 4V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5Zm2 0h2V2H8v2ZM7 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Z"
      />
    </Icon>
  );
}

export default Trash;
