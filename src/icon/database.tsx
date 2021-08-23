import Icon from './icon-base';

type DatabaseProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Database({ size, ...restProps }: DatabaseProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 9.175h10V7.472C12.715 8.163 10.93 8.5 9 8.5c-1.93 0-3.715-.337-5-1.028v1.703zm0 2.971V13.5c0 1.105 2.239 2 5 2s5-.895 5-2v-1.354c-1.285.692-3.07 1.029-5 1.029-1.93 0-3.715-.337-5-1.029zM2 4.5c0-2.71 3.225-4 7-4s7 1.29 7 4v9c0 2.71-3.225 4-7 4s-7-1.29-7-4v-9zm7 2c2.761 0 5-.895 5-2s-2.239-2-5-2-5 .895-5 2 2.239 2 5 2zM4 9.175c0 1.104 2.239 2 5 2s5-.896 5-2H4z"
      />
    </Icon>
  );
}

export default Database;
