import React from 'react';

import DataCampLogoTagRegular from './generated/logo-tag/datacamp-logo-tag-regular';
import DataCampLogoTagMonochrome from './generated/logo-tag/datacamp-logo-tag-monochrome';
import BrandingAssetInternal from './branding-asset-internal';

type DataCampLogoTagProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

function DataCampLogoTag({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogoTagProps) {
  return (
    <BrandingAssetInternal
      regularVariant={DataCampLogoTagRegular}
      monochromeVariant={DataCampLogoTagMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogoTag;
