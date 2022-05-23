import DataCampLogomarkRegular from './generated/logomark/datacamp-logomark-regular';
import DataCampLogomarkMonochrome from './generated/logomark/datacamp-logomark-monochrome';
import { BrandingAssetGenericProps } from './branding-asset.types';
import BrandingAssetInternal from './branding-asset-internal';

function DataCampLogomark({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandingAssetGenericProps) {
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
