import Icon from './icon-base';

type BuildingProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Building({ size, ...restProps }: BuildingProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2 16V1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h1a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h1zm12 0V2H4v14h10zM7 5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm0 5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm4-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm0 5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1z"
      />
    </Icon>
  );
}

export default Building;
