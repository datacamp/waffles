import Icon from './icon-base';

type YoutubeBrandProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function YoutubeBrand({ size, ...restProps }: YoutubeBrandProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,2 C0.1548,2 0,2.7866 0,8.93 C0,15.0734 0.1548,15.86 9,15.86 C17.8452,15.86 18,15.0734 18,8.93 C18,2.7866 17.8452,2 9,2 Z M11.8845,9.2306 L7.8435,11.117 C7.4898,11.2808 7.2,11.0972 7.2,10.7066 L7.2,7.1534 C7.2,6.7637 7.4898,6.5792 7.8435,6.743 L11.8845,8.6294 C12.2382,8.795 12.2382,9.065 11.8845,9.2306 Z"
      />
    </Icon>
  );
}

export default YoutubeBrand;
