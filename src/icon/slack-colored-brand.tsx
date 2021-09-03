import Icon from './icon-base';

type SlackColoredBrandProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function SlackColoredBrand({ size, ...restProps }: SlackColoredBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="#36C5F0"
        d="M6.625 4.735c1.041 0 1.891.85 1.891 1.89 0 1.041-.85 1.891-1.89 1.891H1.89C.85 8.516 0 7.666 0 6.626c0-1.041.85-1.891 1.89-1.891h4.735Zm0-4.735c1.041 0 1.891.85 1.891 1.89v1.892h-1.89a1.895 1.895 0 0 1-1.891-1.891C4.735.85 5.585 0 6.625 0Z"
      />
      <path
        fill="#2EB67D"
        d="M16.11 4.735c1.04 0 1.89.85 1.89 1.89 0 1.041-.85 1.891-1.89 1.891h-1.892v-1.89c0-1.041.85-1.891 1.891-1.891ZM11.374 0c1.04 0 1.89.85 1.89 1.89v4.735c0 1.041-.85 1.891-1.89 1.891a1.895 1.895 0 0 1-1.891-1.89V1.89c0-1.04.85-1.891 1.89-1.891Z"
      />
      <path
        fill="#E01E5A"
        d="M6.625 9.484c1.041 0 1.891.85 1.891 1.89v4.735c0 1.04-.85 1.891-1.89 1.891a1.895 1.895 0 0 1-1.891-1.89v-4.735c0-1.041.85-1.891 1.89-1.891Zm-2.843 0v1.89c0 1.041-.85 1.891-1.891 1.891-1.04 0-1.891-.85-1.891-1.89 0-1.041.85-1.891 1.89-1.891h1.892Z"
      />
      <path
        fill="#ECB22E"
        d="M11.375 14.218c1.04 0 1.89.85 1.89 1.891 0 1.04-.85 1.891-1.89 1.891a1.895 1.895 0 0 1-1.891-1.89v-1.892h1.89Zm4.734-4.734c1.04 0 1.891.85 1.891 1.89 0 1.041-.85 1.891-1.89 1.891h-4.735a1.895 1.895 0 0 1-1.891-1.89c0-1.041.85-1.891 1.89-1.891h4.735Z"
      />
    </Icon>
  );
}

export default SlackColoredBrand;
