import Icon from './icon-base';

type BulletProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Bullet({ size, ...restProps }: BulletProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,16 C12.8659932,16 16,12.8659932 16,9 C16,5.13400675 12.8659932,2 9,2 C5.13400675,2 2,5.13400675 2,9 C2,12.8659932 5.13400675,16 9,16 Z M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z M9,13 C6.790861,13 5,11.209139 5,9 C5,6.790861 6.790861,5 9,5 C11.209139,5 13,6.790861 13,9 C13,11.209139 11.209139,13 9,13 Z"
      />
    </Icon>
  );
}

export default Bullet;
