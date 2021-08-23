import Icon from './icon-base';

type TabProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Tab({ size, ...restProps }: TabProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M16 9H9V4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9zm2-1.455V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2.545zM11 4v3h5V5a1 1 0 0 0-1-1h-4z"
      />
    </Icon>
  );
}

export default Tab;
