import Icon from './icon-base';

type MuteInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function MuteInverted({ size, ...restProps }: MuteInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M1.005 4.659h3.017l3.31-3.36a.995.995 0 0 1 1.422 0c.189.191.295.45.295.721v13.96c0 .563-.45 1.02-1.006 1.02a.997.997 0 0 1-.652-.244l-3.37-2.914H1.006A1.013 1.013 0 0 1 0 12.822V5.679c0-.563.45-1.02 1.005-1.02zM13.085 9 11.29 7.207a1 1 0 0 1 1.413-1.414L14.5 7.586l1.794-1.793a1 1 0 1 1 1.414 1.414L15.913 9l1.794 1.793a1 1 0 0 1-1.414 1.414L14.5 10.414l-1.795 1.793a1 1 0 1 1-1.413-1.414L13.085 9z"
      />
    </Icon>
  );
}

export default MuteInverted;
