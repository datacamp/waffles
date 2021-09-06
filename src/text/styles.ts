import { css } from '@emotion/react';

import { tokens } from '../tokens';

export function textStyle() {
  return css`
    font-family: ${tokens.fontFamilies.sansSerif};
    font-size: ${tokens.fontSizes.medium};
    font-weight: ${tokens.fontWeights.regular};
    line-height: ${tokens.lineHeights.tight};
    margin: 0;
    padding: 0;
  `;
}
