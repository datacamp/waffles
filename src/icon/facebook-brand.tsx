import Icon from './icon-base';

type FacebookBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function FacebookBrand({ size, ...restProps }: FacebookBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M10.33 18V9.79h2.873l.43-3.2H10.33V4.545c0-.926.267-1.557 1.655-1.557h1.766V.124A24.974 24.974 0 0 0 11.175 0C8.627 0 6.882 1.491 6.882 4.23v2.36H4v3.2h2.882V18h3.448z"
      />
    </Icon>
  );
}

export default FacebookBrand;
