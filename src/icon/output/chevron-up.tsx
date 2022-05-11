import Icon from '../icon-internal';

type ChevronUpProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ChevronUp({ size, ...restProps }: ChevronUpProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m9.756 5.845 4.95 4.947a1 1 0 1 1-1.415 1.415L8.997 7.916l-4.293 4.279a.998.998 0 0 1-1.413-.003 1.001 1.001 0 0 1 .003-1.415l5.002-4.986a.998.998 0 0 1 1.46.054Z"
      />
    </Icon>
  );
}

export default ChevronUp;
