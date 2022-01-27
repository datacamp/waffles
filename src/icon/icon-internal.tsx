import React from 'react';

const sizeMap = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 24,
};

type IconInternalProps = {
  /* Defines the size of the icon. In general use default `medium` size. */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  /* [skip docs] */
  children: React.ReactNode;
} & React.SVGAttributes<SVGElement>;

function IconInternal({
  size = 'medium',
  children,
  ...restProps
}: IconInternalProps) {
  const numericSize = sizeMap[size];

  return (
    <svg
      width={numericSize}
      height={numericSize}
      aria-hidden="true"
      {...restProps}
    >
      {children}
    </svg>
  );
}

export default IconInternal;
