import Icon from '../icon-internal';

type TerminalInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function TerminalInverted({ size, ...restProps }: TerminalInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 2h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm1.586 7-1.293 1.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414L5.586 9ZM10 10a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3Z"
      />
    </Icon>
  );
}

export default TerminalInverted;
