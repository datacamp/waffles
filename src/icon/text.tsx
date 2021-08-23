import Icon from './icon-base';

type TextProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Text({ size, ...restProps }: TextProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2,6 C1.44771525,6 1,5.55228475 1,5 C1,4.44771525 1.44771525,4 2,4 L16,4 C16.5522847,4 17,4.44771525 17,5 C17,5.55228475 16.5522847,6 16,6 L2,6 Z M2,10 C1.44771525,10 1,9.55228475 1,9 C1,8.44771525 1.44771525,8 2,8 L11,8 C11.5522847,8 12,8.44771525 12,9 C12,9.55228475 11.5522847,10 11,10 L2,10 Z M2,14 C1.44771525,14 1,13.5522847 1,13 C1,12.4477153 1.44771525,12 2,12 L16,12 C16.5522847,12 17,12.4477153 17,13 C17,13.5522847 16.5522847,14 16,14 L2,14 Z"
      />
    </Icon>
  );
}

export default Text;
