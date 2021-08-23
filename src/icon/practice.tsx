import Icon from './icon-base';

type PracticeProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Practice({ size, ...restProps }: PracticeProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M15.1210495,4 L15.1286803,13.9589499 L13.2134982,13.9604173 L13.21,9.938 L4.791,9.938 L4.79432413,13.9604173 L2.87914203,13.9618848 L2.87151122,4.00293492 L4.78669333,4.00146746 L4.789,8.023 L13.208,8.023 L13.2058674,4.00146746 L15.1210495,4 Z M16.079,5.44876516 L17.995,6.55476516 L18,11.2127652 L16.087,12.3167652 L16.079,5.44876516 Z M1.913,5.56430379 L1.921,12.2103038 L0.005,11.1043038 L-6.66133815e-16,6.66830379 L1.913,5.56430379 Z"
      />
    </Icon>
  );
}

export default Practice;
