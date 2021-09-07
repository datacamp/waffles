import { css } from '@emotion/react';

import { tokens } from '../tokens';

const linkBaseStyle = css`
  text-decoration: none;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.relaxed};
  outline: 0;
  border-radius: ${tokens.borderRadius.medium};
  transition: box-shadow 125ms ease-out;

  &:hover:not(:focus) {
    text-decoration: underline;
  }
`;

type LinkStyleOptions = {
  inverted: boolean;
  isFocusVisible: boolean;
};

export function linkStyle({ inverted, isFocusVisible }: LinkStyleOptions) {
  return css`
    ${linkBaseStyle}
    color: ${inverted ? tokens.colors.blueDark : tokens.colors.blueDarkText};

    ${isFocusVisible &&
    css`
      box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
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
