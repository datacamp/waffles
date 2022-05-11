import Icon from '../icon-internal';

type CameraProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Camera({ size, ...restProps }: CameraProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.5v-1h3v1H5zm5-1v1h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h1v-1a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2zm6 3H2v10h14v-10zm-5 5a2 2 0 1 1-3.999.001A2 2 0 0 1 11 10.5zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
      />
    </Icon>
  );
}

export default Camera;
