import { css } from '@emotion/react';

import { tokens } from '../tokens';

const linkBaseStyle = css`
  text-decoration: none;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.relaxed};
  outline: 0;
  border-bottom: ${tokens.borderWidth.thin} solid transparent;
  border-radius: 0;
  transition: all 125ms ease-out;
`;

type LinkStyleOptions = {
  inverted: boolean;
  isFocusVisible: boolean;
};

export function linkStyle({ inverted, isFocusVisible }: LinkStyleOptions) {
  const mainColor = inverted
    ? tokens.colors.blueDark
    : tokens.colors.blueDarkText;

  return css`
    ${linkBaseStyle}
    color: ${mainColor};

    ${isFocusVisible
      ? css`
          border-radius: ${tokens.borderRadius.medium};
          box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
        `
      : css`
          &:hover {
            border-bottom-color: ${mainColor};
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
