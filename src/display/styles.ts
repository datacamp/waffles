import { css } from '@emotion/react';

import { tokens } from '../tokens';

type DisplayStyleOptions = {
  inverted: boolean;
};

export function displayStyle({ inverted }: DisplayStyleOptions) {
  return css`
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    font-size: ${tokens.fontSizes.huge};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.default};
    letter-spacing: ${tokens.letterSpacing.tight};
  `;
}
