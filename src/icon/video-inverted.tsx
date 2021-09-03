import Icon from './icon-base';

type VideoInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function VideoInverted({ size, ...restProps }: VideoInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3 2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm4.447 4.106A1 1 0 0 0 6 7v4a1 1 0 0 0 1.447.894l4-2a1 1 0 0 0 0-1.788l-4-2Z"
      />
    </Icon>
  );
}

export default VideoInverted;
