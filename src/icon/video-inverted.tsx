import Icon from './icon-base';

type VideoInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function VideoInverted({ size, ...restProps }: VideoInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3,2 L15,2 C16.6568542,2 18,3.34314575 18,5 L18,13 C18,14.6568542 16.6568542,16 15,16 L3,16 C1.34314575,16 0,14.6568542 0,13 L0,5 C0,3.34314575 1.34314575,2 3,2 Z M7.4472136,6.10557281 C6.7823125,5.77312226 6,6.25661798 6,7 L6,11 C6,11.743382 6.7823125,12.2268777 7.4472136,11.8944272 L11.4472136,9.89442719 C12.1842621,9.52590292 12.1842621,8.47409708 11.4472136,8.10557281 L7.4472136,6.10557281 Z"
      />
    </Icon>
  );
}

export default VideoInverted;
