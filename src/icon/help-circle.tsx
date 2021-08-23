import Icon from './icon-base';

type HelpCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function HelpCircle({ size, ...restProps }: HelpCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm.998-3.992a1 1 0 1 1-2 0v-.72c.002-.07.002-.07.009-.14.058-.479.275-.705.696-1.005.017-.012.44-.298.554-.385.34-.259.472-.46.472-.718 0-.624-.424-.968-.887-.968-.28 0-.617.142-1.018.47a1 1 0 0 1-1.267-1.548c.734-.6 1.498-.922 2.285-.922 1.486 0 2.887 1.136 2.887 2.968 0 .99-.472 1.708-1.259 2.308-.105.08-.327.234-.472.333v.327z"
      />
    </Icon>
  );
}

export default HelpCircle;
