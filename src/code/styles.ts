import { css } from '@emotion/react';

import Code from './code';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

const sizeMap = {
  medium: {
    fontSize: tokens.fontSizes.small,
  },
  large: {
    fontSize: tokens.fontSizes.medium,
  },
};

const baseCodeStyle = css`
  font-family: ${tokens.fontFamilies.mono};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  border-radius: ${tokens.borderRadius.medium};
  margin: 0 2px;
  padding: 2px 4px;
  white-space: nowrap;
`;

type CodeStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Code>['size']>;
  inverted: boolean;
};

export function codeStyle({ size, inverted }: CodeStyleOptions) {
  return css`
    ${baseCodeStyle}
    font-size: ${sizeMap[size].fontSize};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background-color: ${inverted
      ? hexToRgba(tokens.colors.white, 0.3)
      : tokens.colors.beige};
  `;
}
