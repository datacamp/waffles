import React from 'react';

import DataCampLogomarkRegular from './generated/logomark/datacamp-logomark-regular';
import DataCampLogomarkMonochrome from './generated/logomark/datacamp-logomark-monochrome';
import DataCampBrandingInternal from './datacamp-branding-internal';

type DataCampLogomarkProps = {
  inverted?: boolean;
  monochrome?: boolean;
} & React.SVGAttributes<SVGElement>;

// TODO: Document props

function DataCampLogomark({
  inverted = false,
  monochrome = false,
  ...restProps
}: DataCampLogomarkProps) {
  return (
    <DataCampBrandingInternal
      regularVariant={DataCampLogomarkRegular}
      monochromeVariant={DataCampLogomarkMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogomark;
