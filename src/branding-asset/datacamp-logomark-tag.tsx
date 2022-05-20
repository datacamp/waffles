import React from 'react';

import DataCampLogomarkTagRegular from './generated/logomark-tag/datacamp-logomark-tag-regular';
import DataCampLogomarkTagMonochrome from './generated/logomark-tag/datacamp-logomark-tag-monochrome';
import BrandingAssetInternal from './branding-asset-internal';

type DataCampLogomarkTagProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

function DataCampLogomarkTag({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogomarkTagProps) {
  return (
    <BrandingAssetInternal
      regularVariant={DataCampLogomarkTagRegular}
      monochromeVariant={DataCampLogomarkTagMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogomarkTag;
