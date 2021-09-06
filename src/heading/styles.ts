import { css } from '@emotion/react';

import { tokens } from '../tokens';
import Heading from './heading';

// Mapping between heading size, HTML elements, and actual font size

const sizeMap = {
  xxlarge: {
    fontSize: tokens.fontSizes.xxlarge,
    element: 'h1',
  },
  xlarge: {
    element: 'h2',
    fontSize: tokens.fontSizes.xlarge,
  },
  large: {
    element: 'h3',
    fontSize: tokens.fontSizes.large,
  },
  medium: {
    element: 'h4',
    fontSize: tokens.fontSizes.medium,
  },
} as const;

// Generate heading style and default HTML element (from h1 to h4) based on provided size

type SizeOptions = {
  size: NonNullable<React.ComponentProps<typeof Heading>['size']>;
};

export function headingStyle({ size }: SizeOptions) {
  return css`
    font-weight: ${tokens.fontWeights.bold};
    font-size: ${sizeMap[size].fontSize};
    margin-bottom: ${tokens.spacing.small};
  `;
}

export function sizeToElement({ size }: SizeOptions) {
  return sizeMap[size].element;
}
