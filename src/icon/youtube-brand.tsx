import Icon from './icon-base';

type YoutubeBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function YoutubeBrand({ size, ...restProps }: YoutubeBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 2C.155 2 0 2.787 0 8.93s.155 6.93 9 6.93 9-.787 9-6.93S17.845 2 9 2Zm2.884 7.23-4.04 1.887c-.354.164-.644-.02-.644-.41V7.153c0-.39.29-.574.643-.41l4.041 1.886c.354.166.354.436 0 .602Z"
      />
    </Icon>
  );
}

export default YoutubeBrand;
