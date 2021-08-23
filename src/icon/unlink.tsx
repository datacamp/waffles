import Icon from './icon-base';

type UnlinkProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Unlink({ size, ...restProps }: UnlinkProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.566 2.5a1.158 1.158 0 000 1.637l11.32 11.32a1.158 1.158 0 001.638-1.638L4.204 2.5a1.158 1.158 0 00-1.638 0zm-1.21 5.43l1.591-1.59 1.456 1.455-1.59 1.59a2.574 2.574 0 003.639 3.64l1.59-1.59 1.456 1.456-1.59 1.59A4.632 4.632 0 111.357 7.93zm13.786 3.684l-1.456-1.456 1.501-1.5a2.573 2.573 0 10-3.64-3.64l-1.5 1.501L8.59 5.063l1.501-1.5a4.632 4.632 0 016.551 6.55l-1.5 1.501z"
      />
    </Icon>
  );
}

export default Unlink;
