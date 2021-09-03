import Icon from './icon-base';

type CodeProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Code({ size, ...restProps }: CodeProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m17.655 9.756-4.946 4.95a1 1 0 1 1-1.415-1.415l4.29-4.294-4.277-4.293a.998.998 0 0 1 .003-1.413 1 1 0 0 1 1.414.003l4.985 5.002a.998.998 0 0 1-.054 1.46Zm-17.31 0a.998.998 0 0 1-.054-1.46l4.985-5.002a1 1 0 0 1 1.414-.003.998.998 0 0 1 .003 1.413L2.416 8.997l4.29 4.294a1.002 1.002 0 0 1-1.415 1.416L.345 9.757Z"
      />
    </Icon>
  );
}

export default Code;
