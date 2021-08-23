import Icon from './icon-base';

type VisibleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Visible({ size, ...restProps }: VisibleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,14 C12.8659932,14 16,9.63287762 16,9 C16,8.36712238 12.8659932,4 9,4 C5.13400675,4 2,8.10211158 2,9 C2,9.89788842 5.13400675,14 9,14 Z M9,16 C4.79104267,16 0,11.6968052 0,9 C0,6.30319478 4.79104267,2 9,2 C13.1416171,2 18,6.49072792 18,9 C18,11.5092721 13.1416171,16 9,16 Z M9,12 C7.34314575,12 6,10.6568542 6,9 C6,7.34314575 7.34314575,6 9,6 C10.6568542,6 12,7.34314575 12,9 C12,10.6568542 10.6568542,12 9,12 Z"
      />
    </Icon>
  );
}

export default Visible;
