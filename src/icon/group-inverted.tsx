import Icon from './icon-base';

type GroupInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function GroupInverted({ size, ...restProps }: GroupInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2 18c-.667 0-1-.333-1-1v-5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5c0 .667-.333 1-1 1H2Zm11 0c-.667 0-1-.333-1-1v-5c0-.667.333-1 1-1h1a3 3 0 0 1 3 3v3c0 .667-.333 1-1 1h-3ZM6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
    </Icon>
  );
}

export default GroupInverted;
