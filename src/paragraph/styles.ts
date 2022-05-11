import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Paragraph from './paragraph';

// Mappings between paragraph's sizes and variants, and design tokens

const sizeMap = {
  small: {
    fontSize: tokens.fontSizes.small,
  },
  medium: {
    fontSize: tokens.fontSizes.medium,
  },
  large: {
    fontSize: tokens.fontSizes.large,
  },
} as const;

const regularVariantMap = {
  primary: {
    color: tokens.colors.navy,
  },
  secondary: {
    color: tokens.colors.navySubtleTextOnLight,
  },
} as const;

const invertedVariantMap = {
  primary: {
    color: tokens.colors.white,
  },
  secondary: {
    color: tokens.colors.navySubtleTextOnDark,
  },
} as const;

// Generate paragraph style based on provided variant and size

type ParagraphStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Paragraph>['variant']>;
  size: NonNullable<React.ComponentProps<typeof Paragraph>['size']>;
  inverted: boolean;
};

export function paragraphStyle({
  variant,
  size,
  inverted,
}: ParagraphStyleOptions) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return css`
    line-height: ${tokens.lineHeights.relaxed};
    margin-bottom: ${tokens.spacing.small};
    color: ${variantMap[variant].color};
    font-size: ${sizeMap[size].fontSize};
  `;
}
