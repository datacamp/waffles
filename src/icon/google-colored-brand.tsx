import Icon from './icon-internal';

type GoogleColoredBrandProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function GoogleColoredBrand({ size, ...restProps }: GoogleColoredBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="#4285F4"
        d="M17.537 9.156c0-.59-.048-1.183-.15-1.763H9.205v3.34h4.685a4.015 4.015 0 0 1-1.734 2.636v2.168h2.796c1.641-1.511 2.585-3.742 2.585-6.381Z"
      />
      <path
        fill="#34A853"
        d="M9.205 17.63c2.34 0 4.312-.767 5.75-2.093l-2.795-2.168c-.778.53-1.782.83-2.952.83-2.263 0-4.182-1.528-4.87-3.58H1.453v2.234a8.676 8.676 0 0 0 7.752 4.778Z"
      />
      <path
        fill="#FBBC04"
        d="M4.334 10.619a5.196 5.196 0 0 1 0-3.322V5.063H1.453a8.682 8.682 0 0 0 0 7.79l2.881-2.234Z"
      />
      <path
        fill="#EA4335"
        d="M9.205 3.715a4.714 4.714 0 0 1 3.327 1.3L15.01 2.54A8.337 8.337 0 0 0 9.205.282a8.673 8.673 0 0 0-7.752 4.781l2.881 2.234c.686-2.056 2.608-3.582 4.87-3.582Z"
      />
    </Icon>
  );
}

export default GoogleColoredBrand;
