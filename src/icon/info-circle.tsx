import Icon from './icon-base';

type InfoCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function InfoCircle({ size, ...restProps }: InfoCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0Zm0 2a7 7 0 1 0 0 14A7 7 0 0 0 9 2Zm0 5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
    </Icon>
  );
}

export default InfoCircle;
