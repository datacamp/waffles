import Icon from './icon-base';

type CrosshairProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Crosshair({ size, ...restProps }: CrosshairProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M12.874 8A4.007 4.007 0 0 0 10 5.126V8h2.874Zm2.043 0H16a1 1 0 0 1 0 2h-1.083A6.005 6.005 0 0 1 10 14.917V16a1 1 0 0 1-2 0v-1.083A6.005 6.005 0 0 1 3.083 10H2a1 1 0 1 1 0-2h1.083A6.005 6.005 0 0 1 8 3.083V2a1 1 0 1 1 2 0v1.083A6.005 6.005 0 0 1 14.917 8Zm-2.043 2H10v2.874A4.007 4.007 0 0 0 12.874 10ZM8 12.874V10H5.126A4.007 4.007 0 0 0 8 12.874ZM5.126 8H8V5.126A4.007 4.007 0 0 0 5.126 8Z"
      />
    </Icon>
  );
}

export default Crosshair;
