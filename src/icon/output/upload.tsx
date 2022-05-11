import Icon from '../icon-internal';

type UploadProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Upload({ size, ...restProps }: UploadProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 3.42 4.709 6.707c-.391.39-1.025.39-1.416 0a1 1 0 0 1 0-1.414L8.231.36A.998.998 0 0 1 9.758.348l4.948 4.93a1 1 0 0 1-1.41 1.417L10 3.411l-.002 9.27a1 1 0 0 1-2 0L8 3.42ZM1 16h16a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2Z"
      />
    </Icon>
  );
}

export default Upload;
