import Icon from './icon-base';

type SlackBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function SlackBrand({ size, ...restProps }: SlackBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3.782 11.375c0 1.04-.85 1.89-1.891 1.89-1.04 0-1.891-.85-1.891-1.89 0-1.041.85-1.891 1.89-1.891h1.892v1.89zm.953 0c0-1.041.85-1.891 1.89-1.891 1.041 0 1.891.85 1.891 1.89v4.735c0 1.04-.85 1.891-1.89 1.891a1.895 1.895 0 0 1-1.891-1.89v-4.735zm1.89-7.593c-1.04 0-1.89-.85-1.89-1.891S5.585 0 6.625 0c1.041 0 1.891.85 1.891 1.89v1.892h-1.89zm0 .953c1.041 0 1.891.85 1.891 1.89 0 1.041-.85 1.891-1.89 1.891H1.89C.85 8.516 0 7.666 0 6.626c0-1.041.85-1.891 1.89-1.891h4.735zm7.593 1.89c0-1.04.85-1.89 1.891-1.89 1.04 0 1.891.85 1.891 1.89 0 1.041-.85 1.891-1.89 1.891h-1.892v-1.89zm-.953 0c0 1.041-.85 1.891-1.89 1.891a1.895 1.895 0 0 1-1.891-1.89V1.89c0-1.04.85-1.891 1.89-1.891 1.041 0 1.891.85 1.891 1.89v4.735zm-1.89 7.593c1.04 0 1.89.85 1.89 1.891 0 1.04-.85 1.891-1.89 1.891a1.895 1.895 0 0 1-1.891-1.89v-1.892h1.89zm0-.953a1.895 1.895 0 0 1-1.891-1.89c0-1.041.85-1.891 1.89-1.891h4.735c1.04 0 1.891.85 1.891 1.89 0 1.041-.85 1.891-1.89 1.891h-4.735z"
      />
    </Icon>
  );
}

export default SlackBrand;
