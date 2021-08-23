import Icon from './icon-base';

type HealthInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function HealthInverted({ size, ...restProps }: HealthInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M12 6V2.5A1.5 1.5 0 0 0 10.5 1h-3A1.5 1.5 0 0 0 6 2.5V6H2.5A1.5 1.5 0 0 0 1 7.5v3A1.5 1.5 0 0 0 2.5 12H6v3.5A1.5 1.5 0 0 0 7.5 17h3a1.5 1.5 0 0 0 1.5-1.5V12h3.5a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 15.5 6H12z"
      />
    </Icon>
  );
}

export default HealthInverted;
