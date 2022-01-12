import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { readableHexColor } from '../helpers';
import Badge from './badge';

const sizeMap = {
  small: {
    sizing: '16px',
    fontSize: '10px',
  },
  medium: {
    sizing: '18px',
    fontSize: tokens.fontSizes.small,
  },
  large: {
    sizing: '18px',
    fontSize: tokens.fontSizes.medium,
  },
};

const baseBadgeStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  line-height: ${tokens.lineHeights.tight};
  text-transform: uppercase;
  border-radius: ${tokens.borderRadius.medium};
  padding-left: ${tokens.spacing.xsmall};
  padding-right: ${tokens.spacing.xsmall};
  letter-spacing: 0.5px;
`;

type BadgeStyleOptions = {
  color: string;
  size: NonNullable<React.ComponentProps<typeof Badge>['size']>;
};

export function badgeStyle({ color, size }: BadgeStyleOptions) {
  return css`
    ${baseBadgeStyle}
    background-color: ${color};
    color: ${readableHexColor(color)};
    height: ${sizeMap[size].sizing};
    font-size: ${sizeMap[size].fontSize};
  `;
}
