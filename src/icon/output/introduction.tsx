import Icon from '../icon-internal';

type IntroductionProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Introduction({ size, ...restProps }: IntroductionProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M3 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Zm0-2h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm4.47 9.87a.5.5 0 0 1-.726-.527l.292-1.705-1.238-1.207a.5.5 0 0 1 .277-.853l1.711-.249.766-1.55a.5.5 0 0 1 .896 0l.766 1.55 1.711.25a.5.5 0 0 1 .277.852l-1.238 1.207.292 1.705a.5.5 0 0 1-.725.527L9 11.065l-1.53.805Z"
      />
    </Icon>
  );
}

export default Introduction;
