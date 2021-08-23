import Icon from './icon-base';

type ExerciseProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Exercise({ size, ...restProps }: ExerciseProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4zm0-2h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 6h6a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"
      />
    </Icon>
  );
}

export default Exercise;
