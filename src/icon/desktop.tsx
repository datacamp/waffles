import Icon from './icon-base';

type DesktopProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Desktop({ size, ...restProps }: DesktopProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 14a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h6Zm5-12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16Zm-1 2H2v7h14V4Z"
      />
    </Icon>
  );
}

export default Desktop;
