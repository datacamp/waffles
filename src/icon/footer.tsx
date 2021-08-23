import Icon from './icon-base';

type FooterProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Footer({ size, ...restProps }: FooterProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2 10h14V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5zm0 2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1H2zM3 2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"
      />
    </Icon>
  );
}

export default Footer;
