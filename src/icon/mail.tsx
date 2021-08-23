import Icon from './icon-base';

type MailProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Mail({ size, ...restProps }: MailProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m16 4.5-5.586 5.586a2 2 0 0 1-2.828 0L2 4.5v9h14v-9zm-14-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm7 6.172L13.172 4.5H4.828L9 8.672z"
      />
    </Icon>
  );
}

export default Mail;
