import Icon from './icon-base';

type FeedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Feed({ size, ...restProps }: FeedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M1 8a1 1 0 1 1 0-2c5.578 0 11 5.436 11 11a1 1 0 0 1-2 0c0-4.46-4.528-9-9-9zm0-5a1 1 0 1 1 0-2c8.09 0 16 7.93 16 16a1 1 0 0 1-2 0C15 10.033 7.985 3 1 3zm2 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
    </Icon>
  );
}

export default Feed;
