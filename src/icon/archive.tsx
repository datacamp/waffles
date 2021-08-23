import Icon from './icon-base';

type ArchiveProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Archive({ size, ...restProps }: ArchiveProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M8.042 10.581 8.04 1a1 1 0 1 1 2 0l.002 9.593 2.296-2.287a.998.998 0 0 1 1.413.003c.39.392.388 1.025-.003 1.415l-3.949 3.932a.998.998 0 0 1-1.526-.014L4.335 9.708a1 1 0 1 1 1.416-1.415l2.29 2.288zM13.572 6a1 1 0 1 1 0-2H17a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3.41a1 1 0 1 1 0 2H2v10h14V6h-2.428z"
      />
    </Icon>
  );
}

export default Archive;
