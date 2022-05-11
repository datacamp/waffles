import Icon from '../icon-internal';

type FlashProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Flash({ size, ...restProps }: FlashProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4.72 18c-.245 0-.492-.059-.719-.18a1.403 1.403 0 0 1-.629-1.83l2.659-5.151H3.755c-.478 0-.931-.228-1.206-.613a1.375 1.375 0 0 1-.096-1.46L6.738.768A1.473 1.473 0 0 1 8.049 0h3.81a1.49 1.49 0 0 1 1.224.632 1.37 1.37 0 0 1 .065 1.473l-1.664 2.947h2.754c.56 0 1.063.297 1.316.775a1.39 1.39 0 0 1-.222 1.6l-9.52 10.104A1.494 1.494 0 0 1 4.72 18zm-.363-1.84-.001.001.001-.001zm3.317-7.32h1.642l-2.351 4.553 5.974-6.341h-4.88L10.911 2H8.346L4.681 8.84h2.993zm-3.914 0h-.002.005-.003zm4.741-7.129-.001.003.001-.003zm2.908-.593-.003.005.003-.005z"
      />
    </Icon>
  );
}

export default Flash;
