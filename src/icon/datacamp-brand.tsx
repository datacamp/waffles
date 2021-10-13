import Icon from './icon-internal';

type DatacampBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function DatacampBrand({ size, ...restProps }: DatacampBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8.122 4.454v4.36l-4.627 2.64V1.799l4.627 2.655Zm1.497 9.161v-3.93l6.195-3.535-1.507-.863L9.62 7.96V4.018a.754.754 0 0 0-.376-.65L3.599.133a1.08 1.08 0 0 0-1.6.95L2 12.168a1.082 1.082 0 0 0 1.555.976l.042-.022 4.522-2.581v3.516c0 .27.144.517.377.651L14.298 18l1.507-.864-6.186-3.52Z"
      />
    </Icon>
  );
}

export default DatacampBrand;
