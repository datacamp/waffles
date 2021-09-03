import Icon from './icon-base';

type RewindProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Rewind({ size, ...restProps }: RewindProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M12.982 5.997v5.971L8.516 8.975l4.466-2.978Zm-1.127-1.656L7.389 7.318a1.985 1.985 0 0 0-.004 3.31l4.466 2.994a2.03 2.03 0 0 0 2.802-.534c.226-.33.347-.72.347-1.12v-5.97A2.008 2.008 0 0 0 12.982 4c-.401 0-.794.119-1.127.34Zm-6.837.79c0-.552-.452-1-1.01-1-.556 0-1.008.448-1.008 1V13c0 .552.452.999 1.009.999.557 0 1.009-.447 1.009-.999V5.13Z"
      />
    </Icon>
  );
}

export default Rewind;
