import Icon from './icon-base';

type CopyProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Copy({ size, ...restProps }: CopyProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7,4 L5,4 C5,1.790861 6.790861,0 9,0 L14,0 C16.209139,0 18,1.790861 18,4 L18,9 C18,11.209139 16.209139,13 14,13 L14,11 C15.1045695,11 16,10.1045695 16,9 L16,4 C16,2.8954305 15.1045695,2 14,2 L9,2 C7.8954305,2 7,2.8954305 7,4 Z M4,7 C2.8954305,7 2,7.8954305 2,9 L2,14 C2,15.1045695 2.8954305,16 4,16 L9,16 C10.1045695,16 11,15.1045695 11,14 L11,9 C11,7.8954305 10.1045695,7 9,7 L4,7 Z M4,5 L9,5 C11.209139,5 13,6.790861 13,9 L13,14 C13,16.209139 11.209139,18 9,18 L4,18 C1.790861,18 0,16.209139 0,14 L0,9 C0,6.790861 1.790861,5 4,5 Z"
      />
    </Icon>
  );
}

export default Copy;
