import Icon from '../icon-internal';

type RemoveInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function RemoveInverted({ size, ...restProps }: RemoveInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18Zm-3-8h6a1 1 0 0 0 0-2H6a1 1 0 1 0 0 2Z"
      />
    </Icon>
  );
}

export default RemoveInverted;
