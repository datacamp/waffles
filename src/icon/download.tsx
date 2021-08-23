import Icon from './icon-base';

type DownloadProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Download({ size, ...restProps }: DownloadProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8 10.26 7.998 1a1 1 0 0 1 2 0L10 10.27l3.296-3.285a.999.999 0 1 1 1.41 1.417l-4.948 4.93a.998.998 0 0 1-1.527-.012L3.293 8.387a1 1 0 0 1 0-1.414 1.002 1.002 0 0 1 1.416 0l3.29 3.287zM1 16h16a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
      />
    </Icon>
  );
}

export default Download;
