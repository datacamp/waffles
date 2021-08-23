import Icon from './icon-base';

type VideoCameraInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function VideoCameraInverted({ size, ...restProps }: VideoCameraInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M13,6.30000853 L16.3310356,3.30207941 C16.7415458,2.93262059 17.3738357,2.96589931 17.7432945,3.37640951 C17.9085565,3.56003417 18,3.79833227 18,4.04537388 L18,13.9546379 C18,14.5069226 17.5522847,14.9546379 17,14.9546379 C16.7529584,14.9546379 16.5146603,14.8631944 16.3310356,14.6979324 L13,11.7000032 L13,14 C13,14.5522847 12.5149751,15 11.9166667,15 L1.08333333,15 C0.485024854,15 0,14.5522847 0,14 L0,4 C0,3.44771525 0.485024854,3 1.08333333,3 L11.9166667,3 C12.5149751,3 13,3.44771525 13,4 L13,6.30000853 Z"
      />
    </Icon>
  );
}

export default VideoCameraInverted;
