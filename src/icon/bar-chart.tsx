import Icon from './icon-base';

type BarChartProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function BarChart({ size, ...restProps }: BarChartProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3,12 C3.55228475,12 4,12.4477153 4,13 L4,18 L2,18 L2,13 C2,12.4477153 2.44771525,12 3,12 Z M9,6 C9.55228475,6 10,6.44771525 10,7 L10,18 L8,18 L8,7 C8,6.44771525 8.44771525,6 9,6 Z M15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,18 L14,18 L14,1 C14,0.44771525 14.4477153,1.01453063e-16 15,0 Z"
      />
    </Icon>
  );
}

export default BarChart;
