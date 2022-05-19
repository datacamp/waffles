import React from 'react';

import DataCampLogomarkTagRegular from './generated/logomark-tag/datacamp-logomark-tag-regular';
import DataCampLogomarkTagMonochrome from './generated/logomark-tag/datacamp-logomark-tag-monochrome';
import DataCampBrandingInternal from './datacamp-branding-internal';

type DataCampLogomarkTagProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

// TODO: Document props

function DataCampLogomarkTag({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogomarkTagProps) {
  return (
    <DataCampBrandingInternal
      regularVariant={DataCampLogomarkTagRegular}
      monochromeVariant={DataCampLogomarkTagMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogomarkTag;
