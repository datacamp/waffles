import Icon from './icon-base';

type GroupProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Group({ size, ...restProps }: GroupProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 17v-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5c0 .667-.333 1-1 1s-1-.333-1-1v-5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5c0 .667-.333 1-1 1-.666 0-1-.333-1-1zm6 0v-3a1 1 0 0 0-1-1h-1c-.667 0-1-.333-1-1s.333-1 1-1h1a3 3 0 0 1 3 3v3c0 .667-.333 1-1 1-.666 0-1-.333-1-1zM6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
    </Icon>
  );
}

export default Group;
