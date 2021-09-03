import Icon from './icon-base';

type CopyProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Copy({ size, ...restProps }: CopyProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M7 4H5a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2ZM4 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4Zm0-2h5a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z"
      />
    </Icon>
  );
}

export default Copy;
