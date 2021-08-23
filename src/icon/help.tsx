import Icon from './icon-base';

type HelpProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Help({ size, ...restProps }: HelpProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M10.196 11.037c0 .552-.44 1-.983 1a.992.992 0 0 1-.983-1V9.155c0-.369.2-.708.519-.882 1.582-.863 2.285-1.744 2.285-2.636C11.034 4.579 10.242 4 9.213 4c-.408 0-.902.3-1.478.996a.971.971 0 0 1-1.385.121 1.012 1.012 0 0 1-.119-1.409C7.146 2.602 8.139 2 9.213 2 11.213 2 13 3.304 13 5.637c0 1.613-.98 2.978-2.804 4.1v1.3zM9.239 16a.992.992 0 0 1-.983-1c0-.553.44-1 .983-1 .543 0 .983.447.983 1 0 .552-.44 1-.983 1z"
      />
    </Icon>
  );
}

export default Help;
