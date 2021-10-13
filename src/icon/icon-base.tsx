import React from 'react';

const sizeMap = {
  medium: 16,
  small: 14,
  xsmall: 12,
};

type IconBaseProps = {
  /* Defines the size of the icon. In general use default `medium` size. */
  size?: 'medium' | 'small' | 'xsmall';
  /* [skip docs] */
  children: React.ReactNode;
} & React.SVGAttributes<SVGElement>;

function IconBase({ size = 'medium', children, ...restProps }: IconBaseProps) {
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

export default IconBase;
