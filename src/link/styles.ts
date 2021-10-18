import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

const linkBaseStyle = css`
  display: inline-flex;
  align-items: baseline;
  vertical-align: bottom;
  text-decoration: none;
  font-size: inherit;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  line-height: ${tokens.lineHeights.relaxed};
  outline: 0;
  border-radius: ${tokens.borderRadius.medium};
  transition: box-shadow 125ms ease-out, background-color 125ms ease-out;

  & svg {
    align-self: center;
    margin-top: -1px;
  }
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

    &:hover {
      background-color: ${highlightColor};
    }

    ${isFocusVisible
      ? css`
          box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
        `
      : css`
          &:hover {
            text-decoration: underline;
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
