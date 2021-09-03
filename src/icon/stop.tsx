import Icon from './icon-base';

type StopProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Stop({ size, ...restProps }: StopProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 4v10h10V4H4Zm0-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
      />
    </Icon>
  );
}

export default Stop;
