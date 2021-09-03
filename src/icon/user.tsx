import Icon from './icon-base';

type UserProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function User({ size, ...restProps }: UserProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M12 17v-5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5c0 .667-.333 1-1 1s-1-.333-1-1v-5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5c0 .667-.333 1-1 1-.666 0-1-.333-1-1ZM9 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
    </Icon>
  );
}

export default User;
