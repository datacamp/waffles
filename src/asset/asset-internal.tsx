import React from 'react';

type AssetInternalProps = {
  /* [skip docs] */
  width?: number;
  /* [skip docs] */
  height?: number;
  /* [skip docs] */
  children: React.ReactNode;
} & React.SVGAttributes<SVGElement>;

function AssetInternal({
  width,
  height,
  children,
  ...restProps
}: AssetInternalProps) {
  return (
    <svg width={width} height={height} aria-hidden="true" {...restProps}>
      {children}
    </svg>
  );
}

export default AssetInternal;
