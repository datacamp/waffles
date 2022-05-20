import React from 'react';

import DataCampLogomarkRegular from './generated/logomark/datacamp-logomark-regular';
import DataCampLogomarkMonochrome from './generated/logomark/datacamp-logomark-monochrome';
import BrandingAssetInternal from './branding-asset-internal';

type DataCampLogomarkProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

function DataCampLogomark({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogomarkProps) {
  return (
    <BrandingAssetInternal
      regularVariant={DataCampLogomarkRegular}
      monochromeVariant={DataCampLogomarkMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogomark;
