import Icon from '../icon-internal';

type StarInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function StarInverted({ size, ...restProps }: StarInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6.047 17.152c-1.515 1.045-3.464-.427-2.976-2.246l.95-3.548L1.247 9.07C-.178 7.895.566 5.515 2.383 5.434l3.54-.156 1.238-3.45a1.938 1.938 0 0 1 3.678 0l1.238 3.45 3.54.156c1.816.08 2.561 2.461 1.137 3.636l-2.776 2.288.951 3.548c.488 1.82-1.461 3.29-2.976 2.246L9 15.116l-2.953 2.036Z"
      />
    </Icon>
  );
}

export default StarInverted;
