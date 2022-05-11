import Icon from '../icon-internal';

type ApplyProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Apply({ size, ...restProps }: ApplyProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m1.115 10.508 7.883 5.51 7.903-5.494.451.318a.906.906 0 0 1 .095 1.394l-.095.077-7.841 5.524a.891.891 0 0 1-.92.065l-.107-.065-7.841-5.524a.906.906 0 0 1-.094-1.395l.094-.076.472-.334ZM9.889 0l-.001 2.032 7.464 5.26a.891.891 0 0 1 .095 1.38l-.095.076-7.841 5.525a.891.891 0 0 1-1.027 0L.643 8.748a.891.891 0 0 1 0-1.457l7.463-5.259V0H9.89Zm-.001 4.213v4.198l2.032-1.478 1.495 1.052.031.043-3.92 2.851a.891.891 0 0 1-1.014.024l-.035-.024-3.88-2.823 1.54-1.083 1.969 1.432V4.213L2.703 8.02l6.295 4.434 6.294-4.434-5.404-3.807Z"
      />
    </Icon>
  );
}

export default Apply;
