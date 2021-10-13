import Icon from './icon-internal';

type EditProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Edit({ size, ...restProps }: EditProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M12.056 15c0-.552.45-1 1.005-1 .555 0 1.005.448 1.005 1v2c0 .552-.45 1-1.005 1H2.005A1.002 1.002 0 0 1 1 17V1c0-.552.45-1 1.005-1h11.056c.555 0 1.005.448 1.005 1v1.002c0 .552-.45 1-1.005 1a1.002 1.002 0 0 1-1.005-1L3.01 2v14h9.046v-1Zm3.922-7.542-2.132-2.132.707-.707a1 1 0 0 1 1.414 0l.718.718a1 1 0 0 1 0 1.414l-.707.707Zm-.707.707L8.907 14.53l-2.126-.006-.006-2.126 6.364-6.364 2.132 2.132Z"
      />
    </Icon>
  );
}

export default Edit;
