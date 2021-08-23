import Icon from './icon-base';

type FolderProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Folder({ size, ...restProps }: FolderProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M14.5 6H2.18l1.667 10h10.306l1.666-10H14.5zM2.32 4l-.306-1.836A1 1 0 0 1 3 1h12a1 1 0 0 1 .986 1.164L15.68 4H17a1 1 0 0 1 .986 1.164l-2 12A1 1 0 0 1 15 18H3a1 1 0 0 1-.986-.836l-2-12A1 1 0 0 1 1 4h1.32zm2.027 0h9.306l.166-1H4.181l.166 1z"
      />
    </Icon>
  );
}

export default Folder;
