import Icon from './icon-base';

type LockedInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function LockedInverted({ size, ...restProps }: LockedInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6,6 L6,3 C6,1.44793435 7.44667616,2.84217094e-14 8.99821298,2.84217094e-14 C10.5497468,2.84217094e-14 11.9962518,1.44793128 11.9962518,3 L11.9962518,6 L13,6 C14.1045695,6 15,6.8954305 15,8 L15,16 C15,17.1045695 14.1045695,18 13,18 L5,18 C3.8954305,18 3,17.1045695 3,16 L3,8 C3,6.8954305 3.8954305,6 5,6 L6,6 Z M9.99625179,6 L9.99625179,3 C9.99625179,2.55205978 9.44473583,2 8.99821298,2 C8.55163506,2 8,2.55211482 8,3 L8,6 L9.99625179,6 Z M9,10 C8.44771525,10 8,10.4477153 8,11 L8,13 C8,13.5522847 8.44771525,14 9,14 C9.55228475,14 10,13.5522847 10,13 L10,11 C10,10.4477153 9.55228475,10 9,10 Z"
      />
    </Icon>
  );
}

export default LockedInverted;
