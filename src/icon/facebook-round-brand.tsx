import Icon from './icon-base';

type FacebookRoundBrandProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function FacebookRoundBrand({ size, ...restProps }: FacebookRoundBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 9c0-4.968-4.032-9-9-9S0 4.032 0 9a8.99 8.99 0 0 0 7.6 8.889v-6.294H5.302V9H7.6V7.016c0-2.252 1.335-3.503 3.393-3.503.982 0 2.002.185 2.002.185v2.197h-1.13c-1.122 0-1.475.704-1.475 1.409V8.99h2.503l-.399 2.595H10.39v6.294A8.974 8.974 0 0 0 18 9z"
      />
    </Icon>
  );
}

export default FacebookRoundBrand;
