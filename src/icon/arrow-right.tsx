import Icon from './icon-base';

type ArrowRightProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ArrowRight({ size, ...restProps }: ArrowRightProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13.58 10 2 10.002a1 1 0 0 1 0-2L13.59 8l-3.285-3.296a.998.998 0 1 1 1.417-1.41l4.93 4.948a.998.998 0 0 1-.012 1.527l-4.933 4.938a1 1 0 0 1-1.414 0 1.002 1.002 0 0 1 0-1.416l3.287-3.29z"
      />
    </Icon>
  );
}

export default ArrowRight;
