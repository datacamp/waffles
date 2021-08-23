import Icon from './icon-base';

type ExerciseInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function ExerciseInverted({ size, ...restProps }: ExerciseInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 0h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 6a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2H6zm0 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H6z"
      />
    </Icon>
  );
}

export default ExerciseInverted;
