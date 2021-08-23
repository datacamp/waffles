import Icon from './icon-base';

type DocumentProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Document({ size, ...restProps }: DocumentProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M14 9.004H9.996a2 2 0 0 1-2-2V2H4v14h10V9.004zm1.828-2.815A1.938 1.938 0 0 1 16 7v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.003a2 2 0 0 1 1.415.586l4.997 5a2 2 0 0 1 .413.603zm-1.832.815-4-4v4h4z"
      />
    </Icon>
  );
}

export default Document;
