import Icon from './icon-base';

type MoreProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function More({ size, ...restProps }: MoreProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </Icon>
  );
}

export default More;
