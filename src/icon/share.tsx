import Icon from './icon-internal';

type ShareProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Share({ size, ...restProps }: ShareProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.91 1.508a3.015 3.015 0 0 1-4.57 3.802L6.686 8.574a3.04 3.04 0 0 1 0 .858l5.65 3.262a3.016 3.016 0 1 1-1.003 1.742L5.75 11.213a3.015 3.015 0 1 1 0-4.42l5.583-3.223a3.017 3.017 0 0 1 5.576-2.062zM14.8 3.886a1.005 1.005 0 1 0-1.005-1.74 1.005 1.005 0 0 0 1.005 1.74zm-1.005 11.969a1.005 1.005 0 1 0 1.005-1.74 1.005 1.005 0 0 0-1.005 1.74zm-9.09-6.853a1.005 1.005 0 1 1-2.01 0 1.005 1.005 0 0 1 2.01 0z"
      />
    </Icon>
  );
}

export default Share;
