import Icon from './icon-internal';

type TwitterBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function TwitterBrand({ size, ...restProps }: TwitterBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M15.864 5.35c.008.146.01.293.01.439 0 4.491-3.417 9.668-9.666 9.668A9.61 9.61 0 0 1 1 13.93c.266.031.536.047.81.047a6.819 6.819 0 0 0 4.22-1.453 3.4 3.4 0 0 1-3.174-2.36 3.472 3.472 0 0 0 1.534-.058 3.4 3.4 0 0 1-2.725-3.332V6.73a3.39 3.39 0 0 0 1.54.426A3.397 3.397 0 0 1 2.152 2.62a9.644 9.644 0 0 0 7.003 3.55A3.396 3.396 0 0 1 12.466 2c.977 0 1.86.411 2.48 1.072a6.842 6.842 0 0 0 2.157-.825 3.41 3.41 0 0 1-1.494 1.88 6.796 6.796 0 0 0 1.951-.535 6.86 6.86 0 0 1-1.696 1.758Z"
      />
    </Icon>
  );
}

export default TwitterBrand;
