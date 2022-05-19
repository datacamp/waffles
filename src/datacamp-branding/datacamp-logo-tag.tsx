import React from 'react';

import DataCampLogoTagRegular from './generated/logo-tag/datacamp-logo-tag-regular';
import DataCampLogoTagMonochrome from './generated/logo-tag/datacamp-logo-tag-monochrome';
import DataCampBrandingInternal from './datacamp-branding-internal';

type DataCampLogoTagProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

// TODO: Document props

function DataCampLogoTag({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogoTagProps) {
  return (
    <DataCampBrandingInternal
      regularVariant={DataCampLogoTagRegular}
      monochromeVariant={DataCampLogoTagMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogoTag;
