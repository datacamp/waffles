import React from 'react';

type AssetInternalProps = {
  /* [skip docs] */
  children: React.ReactNode;
} & React.SVGAttributes<SVGElement>;

function AssetInternal({ children, ...restProps }: AssetInternalProps) {
  return (
    <svg aria-hidden="true" {...restProps}>
      {children}
    </svg>
  );
}

export default AssetInternal;
