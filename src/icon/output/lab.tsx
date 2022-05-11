import Icon from '../icon-internal';

type LabProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Lab({ size, ...restProps }: LabProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7.996 2 8 8l-4.8 6.4A1 1 0 0 0 4 16h10a1 1 0 0 0 .8-1.6L10 8V2H7.996ZM12 2l-.002 5.331L16.4 13.2A3 3 0 0 1 14 18H4a3 3 0 0 1-2.4-4.8L6 7.334 5.996 2H5a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2h-1Zm-4.565 9.316c-.158.128-.762.953-.823 1.035L5.6 13.7a.5.5 0 0 0 .4.8h6a.5.5 0 0 0 .4-.8l-1.092-1.457c-.153-.203-.51-.683-.808-.595-.62.182-.47.843-1.5.703-.71-.145-.689-1.748-1.565-1.035Z"
      />
    </Icon>
  );
}

export default Lab;
