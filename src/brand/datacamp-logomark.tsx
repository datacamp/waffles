import DataCampLogomarkRegular from './generated/logomark/datacamp-logomark-regular';
import DataCampLogomarkMonochrome from './generated/logomark/datacamp-logomark-monochrome';
import { BrandGenericProps } from './brand.types';
import BrandInternal from './brand-internal';

function DataCampLogomark({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandGenericProps) {
  return (
    <BrandInternal
      regularVariant={DataCampLogomarkRegular}
      monochromeVariant={DataCampLogomarkMonochrome}
      inverted={inverted}
      monochrome={monochrome}
      {...restProps}
    />
  );
}

export default DataCampLogomark;
