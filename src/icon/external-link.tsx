import Icon from './icon-base';

type ExternalLinkProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function ExternalLink({ size, ...restProps }: ExternalLinkProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.425 0a1 1 0 0 1 .117 1.993L4.425 2H2.778a.778.778 0 0 0-.77.672L2 2.778v12.444c0 .394.293.72.672.77l.106.008h12.444c.394 0 .72-.293.77-.672l.008-.106V13.64a1 1 0 0 1 1.993-.117l.007.117v1.582a2.778 2.778 0 0 1-2.609 2.773l-.169.005H2.778a2.778 2.778 0 0 1-2.773-2.609L0 15.222V2.778A2.778 2.778 0 0 1 2.609.005L2.778 0h1.647ZM17 0a1 1 0 0 1 .993.883L18 1v8a1 1 0 0 1-1.993.117L16 9V3.439L5.952 13.521a1 1 0 0 1-1.5-1.318l.083-.094L14.61 2H9a1 1 0 0 1-.993-.883L8 1a1 1 0 0 1 .883-.993L9 0h8Z"
      />
    </Icon>
  );
}

export default ExternalLink;
