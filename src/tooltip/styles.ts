import { css } from '@emotion/react';

import { tokens } from '../tokens';

const tooltipBaseStyle = css`
  position: absolute; // Use absolute position, expected by float-ui default strategy
  z-index: 10;
  padding: ${tokens.spacing.small} 12px;
  border-radius: ${tokens.borderRadius.medium};
  line-height: ${tokens.lineHeights.default};
  max-width: 300px;
`;

type TooltipStyleOptions = {
  x: number | null;
  y: number | null;
  inverted: boolean;
};

export function tooltipStyle({ x, y, inverted }: TooltipStyleOptions) {
  return css`
    ${tooltipBaseStyle}
    top: ${y ? y : 0}px;
    left: ${x ? x : 0}px;
    background-color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    color: ${inverted ? tokens.colors.navy : tokens.colors.white};
  `;
}
