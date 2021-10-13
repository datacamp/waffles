import Icon from './icon-internal';

type HomeProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Home({ size, ...restProps }: HomeProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M1.6 8.802a1 1 0 0 1-1.2-1.6l8-6.002a1 1 0 0 1 1.2 0l8 6.003a1 1 0 1 1-1.2 1.599L9 3.25 1.6 8.802ZM13 15v-4a1 1 0 1 1 2 0v5a.997.997 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.998a1 1 0 1 1 2 0V15h8Z"
      />
    </Icon>
  );
}

export default Home;
