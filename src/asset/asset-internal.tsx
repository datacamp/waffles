import React from 'react';

type AssetInternalProps = {
  /* The width of the asset */
  width?: string | number;
  /* The height of the asset */
  height?: string | number;
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
