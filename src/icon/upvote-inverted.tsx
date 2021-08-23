import Icon from './icon-base';

type UpvoteInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function UpvoteInverted({ size, ...restProps }: UpvoteInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 2.5 1.2 14.3c-.5.8.1 1.8 1 1.8h13.7c.9 0 1.4-1 1-1.8L10 2.5c-.5-.8-1.5-.8-2 0z"
      />
    </Icon>
  );
}

export default UpvoteInverted;
