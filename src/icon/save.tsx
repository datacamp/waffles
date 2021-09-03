import Icon from './icon-base';

type SaveProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Save({ size, ...restProps }: SaveProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4 2H2v14h2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6h2V4l-2-2h-1v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2ZM2 0h12a2 2 0 0 1 1.414.586l2 2A2 2 0 0 1 18 4v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm4 10v6h6v-6H6Zm0 2h6v2H6v-2ZM6 2v2h5V2H6Z"
      />
    </Icon>
  );
}

export default Save;
