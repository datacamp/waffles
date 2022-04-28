import Icon from './icon-internal';

type PlusProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Plus({ size, ...restProps }: PlusProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3c-.6 0-1 .5-1 1.2V8H4.2C3.5 8 3 8.4 3 9s.5 1 1.2 1H8v3.8c0 .7.4 1.2 1 1.2s1-.5 1-1.2V10h3.8c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1H10V4.2C10 3.5 9.6 3 9 3z"
      />
    </Icon>
  );
}

export default Plus;
