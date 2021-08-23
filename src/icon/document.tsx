import Icon from './icon-base';

type DocumentProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Document({ size, ...restProps }: DocumentProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M14,9.00400587 C13.998664,9.0040083 13.9973275,9.00400951 13.9959905,9.00400951 L9.99599049,9.00400951 C8.89142099,9.00400951 7.99599049,8.10857901 7.99599049,7.00400951 L7.99599049,2 L4,2 L4,16 L14,16 L14,9.00400587 Z M15.8280962,6.18878776 C15.9458051,6.44889373 16.0007042,6.72334994 15.9999932,6.99477479 C15.9999977,6.99651629 16,6.99825803 16,7 L16,16 C16,17.1045695 15.1045695,18 14,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,2 C2,0.8954305 2.8954305,0 4,0 L9.00288141,0 C9.53351415,0 10.0423967,0.210871972 10.4175025,0.586194107 L15.4146211,5.58619411 C15.5899813,5.76165542 15.7293863,5.96633596 15.8280962,6.18878776 Z M13.9959905,7.00400951 L9.99599049,3.00400951 L9.99599049,7.00400951 L13.9959905,7.00400951 Z"
      />
    </Icon>
  );
}

export default Document;
