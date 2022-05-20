import React from 'react';

import DataCampLogoRegular from './generated/logo/datacamp-logo-regular';
import DataCampLogoMonochrome from './generated/logo/datacamp-logo-monochrome';
import BrandingAssetInternal from './branding-asset-internal';

type DataCampLogoProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

function DataCampLogo({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogoProps) {
  return (
    <BrandingAssetInternal
      regularVariant={DataCampLogoRegular}
      monochromeVariant={DataCampLogoMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogo;
