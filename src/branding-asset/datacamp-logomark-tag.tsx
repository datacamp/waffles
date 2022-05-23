import DataCampLogomarkTagRegular from './generated/logomark-tag/datacamp-logomark-tag-regular';
import DataCampLogomarkTagMonochrome from './generated/logomark-tag/datacamp-logomark-tag-monochrome';
import { BrandingAssetGenericProps } from './branding-asset.types';
import BrandingAssetInternal from './branding-asset-internal';

function DataCampLogomarkTag({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandingAssetGenericProps) {
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
