import Icon from './icon-base';

type PieChartProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PieChart({ size, ...restProps }: PieChartProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4.304 3.808A6.982 6.982 0 0 0 2 9c0 2.078.906 3.945 2.344 5.227L8.695 9.04l-4.39-5.233zm1.67-1.122 4.462 5.318 5.5.05a7.001 7.001 0 0 0-9.962-5.368zm.049 12.651a7.002 7.002 0 0 0 9.898-5.283l-5.424-.05-4.474 5.333zM0 9a9 9 0 1 1 18 0A9 9 0 0 1 0 9z"
      />
    </Icon>
  );
}

export default PieChart;
