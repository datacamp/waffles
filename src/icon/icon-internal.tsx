import React from 'react';

const sizeMap = {
  medium: 16,
  small: 14,
  xsmall: 12,
};

type IconInternalProps = {
  /* Defines the size of the icon. In general use default `medium` size. */
  size?: 'medium' | 'small' | 'xsmall';
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
