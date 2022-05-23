import DataCampLogoTaglineRegular from './generated/logo-tag/datacamp-logo-tag-regular';
import DataCampLogoTaglineMonochrome from './generated/logo-tag/datacamp-logo-tag-monochrome';
import { BrandGenericProps } from './brand.types';
import BrandInternal from './brand-internal';

function DataCampLogoTagline({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandGenericProps) {
  return (
    <BrandInternal
      regularVariant={DataCampLogoTaglineRegular}
      monochromeVariant={DataCampLogoTaglineMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogoTagline;
