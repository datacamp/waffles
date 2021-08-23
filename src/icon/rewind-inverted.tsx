import Icon from './icon-base';

type RewindInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function RewindInverted({ size, ...restProps }: RewindInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M11.855 4.34 7.389 7.319a1.985 1.985 0 0 0-.004 3.31l4.466 2.994a2.03 2.03 0 0 0 2.802-.534c.226-.33.347-.72.347-1.12v-5.97A2.008 2.008 0 0 0 12.982 4c-.401 0-.794.119-1.127.34zm-6.837.79c0-.551-.452-.998-1.01-.998-.556 0-1.008.447-1.008.999V13c0 .552.452.999 1.009.999.557 0 1.009-.447 1.009-.999V5.13z"
      />
    </Icon>
  );
}

export default RewindInverted;
