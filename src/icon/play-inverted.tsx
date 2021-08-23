import Icon from './icon-base';

type PlayInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PlayInverted({ size, ...restProps }: PlayInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13.6748877,7.3999546 C14.5861475,8.06269073 14.770828,9.31628289 14.0873832,10.1999311 C13.9701226,10.3515411 13.8312352,10.4862202 13.6748877,10.5999277 L6.79996359,15.5998857 C5.8887038,16.2626218 4.59594028,16.0835372 3.91249545,15.199889 C3.64474026,14.8536996 3.5,14.4326359 3.5,13.9998991 L3.5,3.99998319 C3.5,2.89542297 4.42340251,2 5.56247724,2 C6.00873588,2 6.44295667,2.14035456 6.79996359,2.39999664 L13.6748877,7.3999546 Z"
      />
    </Icon>
  );
}

export default PlayInverted;
