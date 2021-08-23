import Icon from './icon-base';

type FacebookSquareBrandProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function FacebookSquareBrand({ size, ...restProps }: FacebookSquareBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.101 0.9,18 2,18 L9,18 L9,11 L7,11 L7,8.525 L9,8.525 L9,6.475 C9,4.311 10.212,2.791 12.766,2.791 L14.569,2.793 L14.569,5.398 L13.372,5.398 C12.378,5.398 12,6.144 12,6.836 L12,8.526 L14.568,8.526 L14,11 L12,11 L12,18 L16,18 C17.1,18 18,17.101 18,16 L18,2 C18,0.9 17.1,0 16,0 Z"
      />
    </Icon>
  );
}

export default FacebookSquareBrand;
