import Icon from '../icon-internal';

type ReplyProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Reply({ size, ...restProps }: ReplyProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4.497 7.872h5.833c4.305 0 6.67 2.081 6.67 6 0 .553-.443 1-.989 1a.995.995 0 0 1-.99-1c0-2.748-1.422-4-4.69-4H4.253l3.377 3.419a1.01 1.01 0 0 1 0 1.416.98.98 0 0 1-1.399 0l-4.89-4.95a1.006 1.006 0 0 1-.053-1.46l4.928-5.003a.982.982 0 0 1 1.399-.003c.387.39.389 1.022.003 1.413L4.497 7.872Z"
      />
    </Icon>
  );
}

export default Reply;
