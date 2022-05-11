import Icon from '../icon-internal';

type AttachmentProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Attachment({ size, ...restProps }: AttachmentProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9.664 3.907a1 1 0 1 1 1.414 1.414l-4.95 4.95c-.331.331-.273 1.14.354 1.768.618.618 1.447.673 1.767.353l4.95-4.95c1.03-1.03 1.03-3.213.003-4.24C12.179 2.18 9.975 2.181 8.956 3.2l-4.95 4.95c-1.362 1.362-1.467 4.189.354 6.01 1.822 1.821 4.648 1.716 6.01.354l4.95-4.95a1 1 0 0 1 1.415 1.414l-4.95 4.95c-2.121 2.12-6.212 2.273-8.839-.354C.319 12.947.472 8.856 2.592 6.735l4.95-4.95c1.8-1.799 5.27-1.8 7.074.003 1.807 1.808 1.808 5.258-.003 7.069l-4.95 4.95c-1.146 1.146-3.236 1.006-4.596-.354-1.366-1.366-1.514-3.435-.353-4.596l4.95-4.95Z"
      />
    </Icon>
  );
}

export default Attachment;
