import { css } from '@emotion/react';

import { tokens } from '../tokens';

export function displayStyle() {
  return css`
    font-size: ${tokens.fontSizes.huge};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.tight};
  `;
}
