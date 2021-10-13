import Icon from './icon-internal';

type StopInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function StopInverted({ size, ...restProps }: StopInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
      />
    </Icon>
  );
}

export default StopInverted;
