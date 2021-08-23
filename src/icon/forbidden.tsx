import Icon from './icon-base';

type ForbiddenProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Forbidden({ size, ...restProps }: ForbiddenProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M14.6595309,4.87973884 L4.87973884,14.6595309 C6.03570494,15.5025434 7.45975886,16 9,16 C12.8659932,16 16,12.8659932 16,9 C16,7.45975886 15.5025434,6.03570494 14.6595309,4.87973884 Z M13.2632696,3.44757295 C12.0826977,2.53975055 10.6043816,2 9,2 C5.13400675,2 2,5.13400675 2,9 C2,10.6043816 2.53975055,12.0826977 3.44757295,13.2632696 L13.2632696,3.44757295 Z M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z"
      />
    </Icon>
  );
}

export default Forbidden;
