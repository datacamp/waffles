import Icon from './icon-base';

type FloatProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Float({ size, ...restProps }: FloatProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M11.032 12.446a4.02 4.02 0 0 0 1.414-1.414l2.16 2.16A6.969 6.969 0 0 0 16 9a6.969 6.969 0 0 0-1.394-4.192l-2.16 2.16a4.02 4.02 0 0 0-1.414-1.414l2.16-2.16A6.969 6.969 0 0 0 9 2a6.969 6.969 0 0 0-4.192 1.394l2.16 2.16a4.02 4.02 0 0 0-1.414 1.414l-2.16-2.16A6.969 6.969 0 0 0 2 9c0 1.572.518 3.024 1.394 4.192l2.16-2.16a4.02 4.02 0 0 0 1.414 1.414l-2.16 2.16A6.969 6.969 0 0 0 9 16a6.969 6.969 0 0 0 4.192-1.394l-2.16-2.16zM9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      />
    </Icon>
  );
}

export default Float;
