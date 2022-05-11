import Icon from '../icon-internal';

type AddCircleInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function AddCircleInverted({ size, ...restProps }: AddCircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18Zm1-10V5a1 1 0 1 0-2 0v3H5a1 1 0 1 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2h-3Z"
      />
    </Icon>
  );
}

export default AddCircleInverted;
