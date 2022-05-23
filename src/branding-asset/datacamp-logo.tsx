import DataCampLogoRegular from './generated/logo/datacamp-logo-regular';
import DataCampLogoMonochrome from './generated/logo/datacamp-logo-monochrome';
import { BrandingAssetGenericProps } from './branding-asset.types';
import BrandingAssetInternal from './branding-asset-internal';

function DataCampLogo({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandingAssetGenericProps) {
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
