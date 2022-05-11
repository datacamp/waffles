import Icon from '../icon-internal';

type GooglePlayBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function GooglePlayBrand({ size, ...restProps }: GooglePlayBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m3.943 17.096 7.666-4.327-1.646-1.824-6.02 6.151Zm-2.8-15.928c-.089.158-.143.34-.143.542v15.126c0 .28.105.52.263.71L8.89 9.755 1.142 1.168Zm15.337 7.36-2.673-1.51L11.085 9.8l1.951 2.163 3.444-1.944a.946.946 0 0 0 .52-.746.946.946 0 0 0-.52-.746Zm-4.115-2.324L3.145 1l6.866 7.61 2.354-2.406Z"
      />
    </Icon>
  );
}

export default GooglePlayBrand;
