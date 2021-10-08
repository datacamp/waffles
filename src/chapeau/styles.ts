import { css } from '@emotion/react';

import { tokens } from '../tokens';

type ChapeauStyleOptions = {
  inverted: boolean;
};

export function chapeauStyle({ inverted }: ChapeauStyleOptions) {
  return css`
    color: ${inverted ? tokens.colors.pink : tokens.colors.navy};
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-transform: uppercase;
  `;
}
