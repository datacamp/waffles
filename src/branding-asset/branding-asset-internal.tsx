import { SVGProps } from 'react';
import { mergeProps } from '@react-aria/utils';

import { tokens } from '../tokens';

import { BrandingAssetGenericProps } from './branding-asset.types';

type BrandingAssetInternalProps = BrandingAssetGenericProps & {
  /* [skip docs] */
  regularVariant: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  /* [skip docs] */
  monochromeVariant: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

function BrandingAssetInternal({
  inverted = false,
  monochrome = false,
  regularVariant: RegularVariant,
  monochromeVariant: MonochromeVariant,
  ...restProps
}: BrandingAssetInternalProps) {
  const mergedProps = mergeProps(
    { color: inverted ? tokens.colors.white : tokens.colors.navy },
    restProps,
  );

  return monochrome ? (
    <MonochromeVariant {...mergedProps} />
  ) : (
    <RegularVariant {...mergedProps} />
  );
}

export default BrandingAssetInternal;
