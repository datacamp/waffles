import Icon from '../icon-internal';

type MoonProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Moon({ size, ...restProps }: MoonProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M15 8.979c0 3.879-3.074 7.016-6.857 7.016a6.726 6.726 0 0 1-3.83-1.194c4.248-.856 7.449-4.476 7.449-8.83a8.706 8.706 0 0 0-.658-3.323C13.417 3.782 15 6.202 15 8.978ZM8.19 1.642a6.764 6.764 0 0 1 1.573 4.33c0 3.864-3.295 7.016-7.382 7.016-.112 0-.224-.002-.336-.007-.853-.036-1.356.947-.828 1.62C2.885 16.733 5.412 18 8.143 18 13.038 18 17 13.957 17 8.979c0-4.63-3.441-8.5-7.936-8.973-.892-.094-1.447.944-.875 1.636Z"
      />
    </Icon>
  );
}

export default Moon;
