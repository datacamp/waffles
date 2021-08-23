import Icon from './icon-base';

type VisibleInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function VisibleInverted({ size, ...restProps }: VisibleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path d="M9,16 C4.79104267,16 0,11.6968052 0,9 C0,6.30319478 4.79104267,2 9,2 C13.1416171,2 18,6.49072792 18,9 C18,11.5092721 13.1416171,16 9,16 Z M9,12 C10.6568542,12 12,10.6568542 12,9 C12,7.34314575 10.6568542,6 9,6 C7.34314575,6 6,7.34314575 6,9 C6,10.6568542 7.34314575,12 9,12 Z" />
    </Icon>
  );
}

export default VisibleInverted;
