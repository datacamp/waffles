import Icon from '../icon-internal';

type HiddenProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Hidden({ size, ...restProps }: HiddenProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m14.679 6.999 1.445-1.445C17.265 6.75 18 8.024 18 9c0 2.51-4.858 7-9 7-.915 0-1.858-.203-2.773-.55l1.579-1.578A5.74 5.74 0 0 0 9 14c3.866 0 7-4.367 7-5 0-.25-.49-1.084-1.321-2.001ZM10.416 4.19A5.504 5.504 0 0 0 9 4C5.134 4 2 8.102 2 9c0 .366.522 1.267 1.403 2.204L1.967 12.64C.77 11.423 0 10.082 0 9c0-2.697 4.791-7 9-7 .969 0 1.977.246 2.952.654L10.416 4.19Zm3.605-1.483a1 1 0 1 1 1.414 1.414L4.121 15.435a1 1 0 0 1-1.414-1.414L14.021 2.707Z"
      />
    </Icon>
  );
}

export default Hidden;
