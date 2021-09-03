import Icon from './icon-base';

type ChevronLeftProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ChevronLeft({ size, ...restProps }: ChevronLeftProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m5.845 8.244 4.947-4.95a1 1 0 1 1 1.415 1.415L7.916 9.003l4.279 4.293a.998.998 0 0 1-.003 1.413 1.001 1.001 0 0 1-1.415-.003L5.791 9.704a.998.998 0 0 1 .054-1.46Z"
      />
    </Icon>
  );
}

export default ChevronLeft;
