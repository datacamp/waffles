import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { readableHexColor } from '../helpers';
import Badge from './badge';

const sizeMap = {
  small: {
    fontSize: '10px',
  },
  medium: {
    fontSize: tokens.fontSizes.small,
  },
  large: {
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
    font-size: ${sizeMap[size].fontSize};
    height: 18px;
  `;
}

export function innerContentStyle() {
  return css`
    max-width: 164px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;
}
