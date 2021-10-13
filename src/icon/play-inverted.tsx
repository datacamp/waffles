import Icon from './icon-internal';

type PlayInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PlayInverted({ size, ...restProps }: PlayInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13.675 7.4a1.96 1.96 0 0 1 .412 2.8 2.032 2.032 0 0 1-.412.4l-6.875 5c-.911.663-2.204.484-2.888-.4A1.96 1.96 0 0 1 3.5 14V4c0-1.105.923-2 2.062-2 .447 0 .881.14 1.238.4l6.875 5Z"
      />
    </Icon>
  );
}

export default PlayInverted;
