import Icon from './icon-internal';

type PythonBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PythonBrand({ size, ...restProps }: PythonBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7.5 0a3 3 0 0 0-3 3v.75h3.75a.75.75 0 0 1 0 1.5H3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h.75V10.5c0-1.24 1.01-2.25 2.25-2.25h6a.75.75 0 0 0 .75-.75V3a3 3 0 0 0-3-3H7.5Zm-.75 1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm7.5 2.25V7.5c0 1.24-1.01 2.25-2.25 2.25H6a.75.75 0 0 0-.75.75V15a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-.75H9.75a.75.75 0 0 1 0-1.5H15a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3h-.75Zm-3 11.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      />
    </Icon>
  );
}

export default PythonBrand;
