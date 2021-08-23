import Icon from './icon-base';

type BulletProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Bullet({ size, ...restProps }: BulletProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm0-5a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
      />
    </Icon>
  );
}

export default Bullet;
