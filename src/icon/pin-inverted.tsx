import Icon from './icon-base';

type PinInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function PinInverted({ size, ...restProps }: PinInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,18 C6.0887594,18 1,12.0071517 1,8 C1,3.581722 4.581722,0 9,0 C13.418278,0 17,3.581722 17,8 C17,12.0071517 11.9112406,18 9,18 Z M9,11 C10.6568542,11 12,9.65685425 12,8 C12,6.34314575 10.6568542,5 9,5 C7.34314575,5 6,6.34314575 6,8 C6,9.65685425 7.34314575,11 9,11 Z"
      />
    </Icon>
  );
}

export default PinInverted;
