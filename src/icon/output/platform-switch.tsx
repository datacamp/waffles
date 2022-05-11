import Icon from '../icon-internal';

type PlatformSwitchProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PlatformSwitch({ size, ...restProps }: PlatformSwitchProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 0a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h9Zm-1 2h-7v14h7V2Zm-10 12v2H5a1 1 0 0 1 0-2h1.5Zm7-1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1Zm-7-11v2H2v7h4.5v2H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5.5Z"
      />
    </Icon>
  );
}

export default PlatformSwitch;
