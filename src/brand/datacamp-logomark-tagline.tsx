import DataCampLogomarkTaglineRegular from './generated/logomark-tag/datacamp-logomark-tag-regular';
import DataCampLogomarkTaglineMonochrome from './generated/logomark-tag/datacamp-logomark-tag-monochrome';
import { BrandGenericProps } from './brand.types';
import BrandInternal from './brand-internal';

function DataCampLogomarkTagline({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandGenericProps) {
  return (
    <BrandInternal
      regularVariant={DataCampLogomarkTaglineRegular}
      monochromeVariant={DataCampLogomarkTaglineMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogomarkTagline;
