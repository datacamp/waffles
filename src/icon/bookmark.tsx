import Icon from './icon-internal';

type BookmarkProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Bookmark({ size, ...restProps }: BookmarkProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z"
      />
    </Icon>
  );
}

export default Bookmark;
