import Icon from './icon-base';

type BookProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Book({ size, ...restProps }: BookProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4,12 L14,12 L14,2 L4,2 L4,12 Z M16,14 L16,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,14 L2,2 C2,0.8954305 2.8954305,0 4,0 L16,0 L16,14 Z M14,14 L4,14 L4,16 L14,16 L14,14 Z M7,4 L11,4 C11.5522847,4 12,4.44771525 12,5 C12,5.55228475 11.5522847,6 11,6 L7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 Z"
      />
    </Icon>
  );
}

export default Book;
