import Icon from './icon-base';

type ChatProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Chat({ size, ...restProps }: ChatProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13.586 12.388A1.972 1.972 0 0 1 15 11.785h1V3.557H2v8.228h7.016c.533 0 1.043.219 1.419.607l1.569 1.623 1.582-1.627ZM2 1.5h14c1.105 0 2 .921 2 2.057v8.228c0 1.136-.895 2.057-2 2.057h-1L12.71 16.2a.98.98 0 0 1-1.415 0l-2.279-2.357H2c-1.105 0-2-.92-2-2.057V3.557C0 2.421.895 1.5 2 1.5Zm4 5.143h6a1 1 0 0 1 1 1V7.7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.057a1 1 0 0 1 1-1Z"
      />
    </Icon>
  );
}

export default Chat;
