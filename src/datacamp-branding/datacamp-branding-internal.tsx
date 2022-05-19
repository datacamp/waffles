import React, { SVGProps } from 'react';
import { mergeProps } from '@react-aria/utils';

import { tokens } from '../tokens';

type DataCampBrandingInternalProps = {
  /* Whether the logo/logomark is inverted in color */
  inverted?: boolean;
  /* Whether the logo/logomark is monochrome in color */
  monochrome?: boolean;
  /* [skip docs] */
  regularVariant: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  /* [skip docs] */
  monochromeVariant: (props: SVGProps<SVGSVGElement>) => JSX.Element;
} & React.SVGAttributes<SVGElement>;

function DataCampBrandingInternal({
  inverted = false,
  monochrome = false,
  regularVariant: RegularVariant,
  monochromeVariant: MonochromeVariant,
  ...restProps
}: DataCampBrandingInternalProps) {
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

export default DataCampBrandingInternal;
