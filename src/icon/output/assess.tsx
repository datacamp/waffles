import Icon from '../icon-internal';

type AssessProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Assess({ size, ...restProps }: AssessProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m9.84 0 .001 7.243a1.948 1.948 0 1 1-1.64-.02V5.34a3.778 3.778 0 0 0 .824 7.462 3.776 3.776 0 0 0 3.207-5.77l1.358-.922A5.416 5.416 0 1 1 8.2 3.67V1.682a7.361 7.361 0 1 0 6.99 3.336l1.353-.918A8.908 8.908 0 0 1 18 9 9 9 0 1 1 8.202.035c.138-.012.276-.012.415-.008L9.84 0Z"
      />
    </Icon>
  );
}

export default Assess;
