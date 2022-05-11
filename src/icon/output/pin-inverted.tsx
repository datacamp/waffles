import Icon from '../icon-internal';

type PinInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PinInverted({ size, ...restProps }: PinInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9 18c-2.911 0-8-5.993-8-10a8 8 0 1 1 16 0c0 4.007-5.089 10-8 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </Icon>
  );
}

export default PinInverted;
