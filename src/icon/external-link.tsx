import Icon from './icon-base';

type ExternalLinkProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ExternalLink({ size, ...restProps }: ExternalLinkProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 2.5a1 1 0 0 1 .117 1.993L6.5 4.5H5.278a.779.779 0 0 0-.771.672l-.007.106v7.444c0 .394.293.719.672.771l.106.007h7.444a.779.779 0 0 0 .771-.672l.007-.106-.007-1.222a1 1 0 0 1 1.993-.117l.007.117.007 1.222a2.779 2.779 0 0 1-2.609 2.773l-.169.005H5.278a2.779 2.779 0 0 1-2.773-2.609l-.005-.169V5.278a2.779 2.779 0 0 1 2.609-2.773l.169-.005H6.5zm7 3.444V7.5l.007.117A1 1 0 0 0 15.5 7.5v-4l-.007-.117A1 1 0 0 0 14.5 2.5h-4l-.117.007A1 1 0 0 0 9.5 3.5l.007.117a1 1 0 0 0 .993.883h1.615l-5.08 5.109-.083.094a1 1 0 0 0 1.499 1.318L13.5 5.944z"
      />
    </Icon>
  );
}

export default ExternalLink;
