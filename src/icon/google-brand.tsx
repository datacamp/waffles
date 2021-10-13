import Icon from './icon-internal';

type GoogleBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function GoogleBrand({ size, ...restProps }: GoogleBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9.18 0a8.65 8.65 0 0 1 6.022 2.342l-2.57 2.57a4.89 4.89 0 0 0-3.452-1.35c-2.348 0-4.342 1.584-5.053 3.717a5.39 5.39 0 0 0 0 3.446c.717 2.13 2.708 3.713 5.056 3.713 1.214 0 2.255-.31 3.062-.86l-.004.003a4.174 4.174 0 0 0 1.754-2.515l.046-.222H9.18V7.378h8.488c.106.602.156 1.217.156 1.829 0 2.738-.979 5.053-2.682 6.62l.001-.001c-1.418 1.312-3.342 2.097-5.62 2.169L9.18 18a9 9 0 0 1-8.043-4.957l-.136-.284a9.007 9.007 0 0 1 .136-7.798l.14-.266A8.998 8.998 0 0 1 9.18.001Z"
      />
    </Icon>
  );
}

export default GoogleBrand;
