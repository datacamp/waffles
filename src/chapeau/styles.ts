import { css } from '@emotion/react';

import { tokens } from '../tokens';

export function chapeauStyle() {
  return css`
    font-size: ${tokens.fontSizes.small};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.relaxed};
    text-transform: uppercase;
  `;
}
