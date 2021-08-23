import Icon from './icon-base';

type HealthProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Health({ size, ...restProps }: HealthProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13 5h2.5A2.5 2.5 0 0 1 18 7.5v3a2.5 2.5 0 0 1-2.5 2.5H13v2.5a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 5 15.5V13H2.5A2.5 2.5 0 0 1 0 10.5v-3A2.5 2.5 0 0 1 2.5 5H5V2.5A2.5 2.5 0 0 1 7.5 0h3A2.5 2.5 0 0 1 13 2.5V5zm-2 2V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V7H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H7v4.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H11z"
      />
    </Icon>
  );
}

export default Health;
