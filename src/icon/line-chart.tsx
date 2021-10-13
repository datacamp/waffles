import Icon from './icon-internal';

type LineChartProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function LineChart({ size, ...restProps }: LineChartProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m2 14.248 5.204-6.853a1 1 0 0 1 1.503-.102l2.185 2.185L16.2 2.4a1 1 0 1 1 1.6 1.2l-6 8a1 1 0 0 1-1.507.107l-2.19-2.19L3.181 16H17a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v13.248Z"
      />
    </Icon>
  );
}

export default LineChart;
