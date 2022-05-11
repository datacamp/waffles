import Icon from '../icon-internal';

type BarChartProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function BarChart({ size, ...restProps }: BarChartProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3 12a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1Zm6-6a1 1 0 0 1 1 1v11H8V7a1 1 0 0 1 1-1Zm6-6a1 1 0 0 1 1 1v17h-2V1a1 1 0 0 1 1-1Z"
      />
    </Icon>
  );
}

export default BarChart;
