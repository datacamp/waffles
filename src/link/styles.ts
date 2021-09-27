import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../utils';

const linkBaseStyle = css`
  text-decoration: none;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.relaxed};
  outline: 0;
  border-radius: ${tokens.borderRadius.medium};
  transition: box-shadow 125ms ease-out, background-color 125ms ease-out;
`;

type LinkStyleOptions = {
  inverted: boolean;
  isFocusVisible: boolean;
};

export function linkStyle({ inverted, isFocusVisible }: LinkStyleOptions) {
  const mainColor = inverted
    ? tokens.colors.blueDark
    : tokens.colors.blueDarkText;

  const highlightColor = hexToRgba(
    inverted ? tokens.colors.white : tokens.colors.navy,
    tokens.opacity.low,
  );

  return css`
    ${linkBaseStyle}
    color: ${mainColor};

    ${isFocusVisible
      ? css`
          box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
        `
      : css`
          &:hover {
            text-decoration: underline;
            background-color: ${highlightColor};
            box-shadow: 0 0 0 2px ${highlightColor};
          }
        `}
  `;
}

type InnerContentStyleOptions = {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
};

export function innerContentStyle({
  hasLeftIcon,
  hasRightIcon,
}: InnerContentStyleOptions) {
  return css`
    ${hasLeftIcon && `padding-left: ${tokens.spacing.xsmall};`}
    ${hasRightIcon && `padding-right: ${tokens.spacing.xsmall};`}
  `;
}
