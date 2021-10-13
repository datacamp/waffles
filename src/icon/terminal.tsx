import Icon from './icon-internal';

type TerminalProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Terminal({ size, ...restProps }: TerminalProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 2h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm1.586 5L4.293 7.707a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414L5.586 9ZM10 10h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2Z"
      />
    </Icon>
  );
}

export default Terminal;
