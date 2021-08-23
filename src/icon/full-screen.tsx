import Icon from './icon-base';

type FullScreenProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function FullScreen({ size, ...restProps }: FullScreenProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3zm0-2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm3 9a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h1zm6-4a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V7h-1z"
      />
    </Icon>
  );
}

export default FullScreen;
