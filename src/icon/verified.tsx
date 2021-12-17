import Icon from './icon-internal';

type VerifiedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Verified({ size, ...restProps }: VerifiedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="m9 0 7.217 1.826a1 1 0 0 1 .783.976v6.987a6 6 0 0 1-2.672 4.992L9 18l-5.328-3.219A5.998 5.998 0 0 1 1 9.79V2.802a1 1 0 0 1 .783-.976L9 0zm0 2.049L3 3.604v6.185a4 4 0 0 0 1.781 3.328L9 15.597l4.219-2.48A3.998 3.998 0 0 0 15 9.79V3.604L9 2.049zm2.454 3.322a1 1 0 0 1 1.555 1.258l-4.108 5.074a1 1 0 0 1-1.534.024L5.243 9.265a1 1 0 1 1 1.514-1.306l1.342 1.556 3.355-4.144z"
      />
    </Icon>
  );
}

export default Verified;
