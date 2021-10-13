import Icon from './icon-internal';

type CheckmarkProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Checkmark({ size, ...restProps }: CheckmarkProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13.746 4.337a1.015 1.015 0 0 1 1.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 0 1-1.483.03L2.771 9.67a.961.961 0 0 1 .044-1.38 1.015 1.015 0 0 1 1.412.041l3.113 3.235 6.406-7.229Z"
      />
    </Icon>
  );
}

export default Checkmark;
