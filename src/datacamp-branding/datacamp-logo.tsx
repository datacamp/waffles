import React from 'react';

import DataCampLogoRegular from './generated/logo/datacamp-logo-regular';
import DataCampLogoMonochrome from './generated/logo/datacamp-logo-monochrome';
import DataCampBrandingInternal from './datacamp-branding-internal';

type DataCampLogoProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

// TODO: Document props

function DataCampLogo({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogoProps) {
  return (
    <DataCampBrandingInternal
      regularVariant={DataCampLogoRegular}
      monochromeVariant={DataCampLogoMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogo;
