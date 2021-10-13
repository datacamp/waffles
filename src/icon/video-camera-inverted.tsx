import Icon from './icon-internal';

type VideoCameraInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function VideoCameraInverted({ size, ...restProps }: VideoCameraInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m13 6.3 3.331-2.998A1 1 0 0 1 18 4.045v9.91a1 1 0 0 1-1.669.743L13 11.7V14c0 .552-.485 1-1.083 1H1.083C.485 15 0 14.552 0 14V4c0-.552.485-1 1.083-1h10.834C12.515 3 13 3.448 13 4v2.3Z"
      />
    </Icon>
  );
}

export default VideoCameraInverted;
