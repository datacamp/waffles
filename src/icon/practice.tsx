import Icon from './icon-internal';

type PracticeProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Practice({ size, ...restProps }: PracticeProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m15.121 4 .008 9.959-1.916.001-.003-4.022H4.791l.003 4.022-1.915.002-.007-9.96h1.915l.002 4.021h8.419l-.002-4.022L15.12 4Zm.958 1.449 1.916 1.106.005 4.658-1.913 1.104-.008-6.868Zm-14.166.115.008 6.646-1.916-1.106L0 6.668l1.913-1.104Z"
      />
    </Icon>
  );
}

export default Practice;
