import Icon from './icon-base';

type LinkedinBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function LinkedinBrand({ size, ...restProps }: LinkedinBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4,2 C4,3.1 3.3,4 2,4 C0.8,4 0,3.1 0,2.1 C0,1 0.8,0 2,0 C3.2,0 4,0.9 4,2 Z M0,18 L4,18 L4,5 L0,5 L0,18 Z M13.6,5.2 C11.5,5.2 10.3,6.4 9.8,7.2 L9.7,7.2 L9.5,5.5 L5.9,5.5 C5.9,6.6 6,7.9 6,9.4 L6,18 L10,18 L10,10.9 C10,10.5 10,10.2 10.1,9.9 C10.4,9.2 10.9,8.3 12,8.3 C13.4,8.3 14,9.5 14,11.1 L14,18 L18,18 L18,10.6 C18,6.9 16.1,5.2 13.6,5.2 Z"
      />
    </Icon>
  );
}

export default LinkedinBrand;
