import { css } from '@emotion/react';

import { tokens } from '../tokens';
import Paragraph from './paragraph';

const regularVariantMap = {
  primary: {
    color: tokens.colors.navy,
  },
  secondary: {
    color: tokens.colors.navySubtleTextOnLight,
  },
};

const invertedVariantMap = {
  primary: {
    color: tokens.colors.white,
  },
  secondary: {
    color: tokens.colors.navySubtleTextOnDark,
  },
};

type ParagraphStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Paragraph>['variant']>;
  inverted: boolean;
};

export function paragraphStyle({ variant, inverted }: ParagraphStyleOptions) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return css`
    line-height: ${tokens.lineHeights.relaxed};
    margin-bottom: ${tokens.spacing.small};
    color: ${variantMap[variant].color};

    &:last-of-type {
      margin-bottom: 0;
    }
  `;
}
