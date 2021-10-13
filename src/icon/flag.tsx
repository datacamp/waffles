import Icon from './icon-internal';

type FlagProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Flag({ size, ...restProps }: FlagProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5 4v5h9V4H5Zm0 7v6a1 1 0 0 1-2 0V1a1 1 0 1 1 2 0v1h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5Z"
      />
    </Icon>
  );
}

export default Flag;
