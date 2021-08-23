import Icon from './icon-base';

type LabProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Lab({ size, ...restProps }: LabProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M7.99599049,2 L8,8 L3.2,14.4 C3.07017787,14.5730962 3,14.7836298 3,15 C3,15.5522847 3.44771525,16 4,16 L14,16 C14.2163702,16 14.4269038,15.9298221 14.6,15.8 C15.0418278,15.4686292 15.1313708,14.8418278 14.8,14.4 L10,8 L10,2 L7.99599049,2 Z M11.9999987,2 L11.9984853,7.33131374 L16.4,13.2 C17.3941125,14.5254834 17.1254834,16.4058875 15.8,17.4 C15.2807115,17.7894664 14.6491106,18 14,18 L4,18 C2.34314575,18 1,16.6568542 1,15 C1,14.3508894 1.21053362,13.7192885 1.6,13.2 L5.99955445,7.3339274 L5.99599094,2.0013365 C5.99599136,2.00089085 5.99599193,2.00044535 5.99599265,2 L5,2 C4.44771525,2 4,1.55228475 4,1 C4,0.44771525 4.44771525,-6.90124201e-13 5,-6.90225654e-13 L13,-6.90225654e-13 C13.5522847,-6.90327107e-13 14,0.44771525 14,1 C14,1.55228475 13.5522847,2 13,2 L11.9999987,2 Z M7.43459251,11.3160713 C7.27685563,11.4443089 6.67325789,12.2689895 6.61198393,12.3506881 L5.6,13.7 C5.3527864,14.0296181 5.58797734,14.5 6,14.5 L12,14.5 C12.4120227,14.5 12.6472136,14.0296181 12.4,13.7 L11.3076043,12.2434724 C11.1547162,12.0396216 10.7984258,11.5599572 10.5,11.6475599 C9.88000895,11.829558 10.030915,12.49072 8.99999912,12.3506881 C8.2904821,12.2060035 8.31113038,10.6034597 7.43459251,11.3160713 Z"
      />
    </Icon>
  );
}

export default Lab;
