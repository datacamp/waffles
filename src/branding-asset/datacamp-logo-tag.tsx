import DataCampLogoTagRegular from './generated/logo-tag/datacamp-logo-tag-regular';
import DataCampLogoTagMonochrome from './generated/logo-tag/datacamp-logo-tag-monochrome';
import { BrandingAssetGenericProps } from './branding-asset.types';
import BrandingAssetInternal from './branding-asset-internal';

function DataCampLogoTag({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandingAssetGenericProps) {
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
