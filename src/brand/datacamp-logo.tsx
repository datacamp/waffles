import DataCampLogoRegular from './generated/logo/datacamp-logo-regular';
import DataCampLogoMonochrome from './generated/logo/datacamp-logo-monochrome';
import { BrandGenericProps } from './brand.types';
import BrandInternal from './brand-internal';

function DataCampLogo({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandGenericProps) {
  return (
    <BrandInternal
      regularVariant={DataCampLogoRegular}
      monochromeVariant={DataCampLogoMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogo;
