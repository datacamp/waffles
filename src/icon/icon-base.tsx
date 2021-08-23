import React from 'react';

const sizesMap = {
  medium: 16,
  small: 14,
  xsmall: 12,
};

type IconBaseProps = {
  size: 'medium' | 'small' | 'xsmall';
  children: React.ReactNode;
} & React.SVGAttributes<SVGElement>;

function IconBase({ size, children, ...restProps }: IconBaseProps) {
  const numericSize = sizesMap[size];

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
