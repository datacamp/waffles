import Icon from './icon-base';

type MailProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Mail({ size, ...restProps }: MailProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M16,4.5 L10.4142136,10.0857864 C9.63316498,10.866835 8.36683502,10.866835 7.58578644,10.0857864 L2,4.5 L2,13.5 L16,13.5 L16,4.5 Z M2,2.5 L16,2.5 C17.1045695,2.5 18,3.3954305 18,4.5 L18,13.5 C18,14.6045695 17.1045695,15.5 16,15.5 L2,15.5 C0.8954305,15.5 0,14.6045695 0,13.5 L0,4.5 C0,3.3954305 0.8954305,2.5 2,2.5 Z M9,8.67157288 L13.1715729,4.5 L4.82842712,4.5 L9,8.67157288 Z"
      />
    </Icon>
  );
}

export default Mail;
