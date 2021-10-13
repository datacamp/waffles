import Icon from './icon-internal';

type MuteProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Mute({ size, ...restProps }: MuteProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2.01 11.801h2.012c.478 0 .94.173 1.304.488l1.712 1.48V4.485L5.444 6.102a1.996 1.996 0 0 1-1.422.598H2.01v5.1ZM1.006 4.66h3.017l3.31-3.36a.995.995 0 0 1 1.422 0c.189.191.295.45.295.721v13.96c0 .563-.45 1.02-1.006 1.02a.997.997 0 0 1-.652-.244l-3.37-2.914H1.006A1.013 1.013 0 0 1 0 12.822V5.679c0-.563.45-1.02 1.005-1.02ZM13.085 9 11.29 7.207a1 1 0 0 1 1.413-1.414L14.5 7.586l1.794-1.793a1 1 0 1 1 1.414 1.414L15.913 9l1.794 1.793a1 1 0 0 1-1.414 1.414L14.5 10.414l-1.795 1.793a1 1 0 1 1-1.413-1.414L13.085 9Z"
      />
    </Icon>
  );
}

export default Mute;
