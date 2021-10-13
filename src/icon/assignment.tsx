import Icon from './icon-internal';

type AssignmentProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Assignment({ size, ...restProps }: AssignmentProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4Zm0-2h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm2 8h6a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2Zm2.5-4h1a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2ZM6 12h6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z"
      />
    </Icon>
  );
}

export default Assignment;
