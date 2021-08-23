import Icon from './icon-base';

type AssignmentInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function AssignmentInverted({ size, ...restProps }: AssignmentInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 0h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 8a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2H6zm2.5-4h1a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2zM6 12h6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"
      />
    </Icon>
  );
}

export default AssignmentInverted;
