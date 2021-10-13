import Icon from './icon-internal';

type TrimBeginProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function TrimBegin({ size, ...restProps }: TrimBeginProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7.42 8 17 7.998a1 1 0 0 1 0 2L7.41 10l3.285 3.296a.998.998 0 1 1-1.417 1.41l-4.93-4.948A.998.998 0 0 1 4.36 8.23l4.933-4.938a1 1 0 0 1 1.414 0c.39.391.39 1.025 0 1.416L7.42 7.999ZM1 18a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"
      />
    </Icon>
  );
}

export default TrimBegin;
