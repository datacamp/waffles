import { SVGProps } from 'react';
import { mergeProps } from '@react-aria/utils';

import { tokens } from '../tokens';

import { BrandGenericProps } from './brand.types';

type BrandInternalProps = BrandGenericProps & {
  /* [skip docs] */
  regularVariant: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  /* [skip docs] */
  monochromeVariant: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

function BrandInternal({
  inverted = false,
  monochrome = false,
  regularVariant: RegularVariant,
  monochromeVariant: MonochromeVariant,
  ...restProps
}: BrandInternalProps) {
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

export default BrandInternal;
