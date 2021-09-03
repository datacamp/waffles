import Icon from './icon-base';

type ChevronDownProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ChevronDown({ size, ...restProps }: ChevronDownProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m8.244 12.155-4.95-4.947a1 1 0 1 1 1.415-1.415l4.294 4.291 4.293-4.279a.998.998 0 0 1 1.413.003c.39.392.388 1.025-.003 1.415l-5.002 4.986a.998.998 0 0 1-1.46-.054Z"
      />
    </Icon>
  );
}

export default ChevronDown;
