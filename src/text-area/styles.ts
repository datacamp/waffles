import { css } from '@emotion/react';

import { tokens } from '../tokens';

import TextArea from './text-area';

// Mapping between text-area sizes

const sizeMap = {
  small: {
    fontSize: tokens.fontSizes.small,
    spacing: '6px',
  },
  medium: {
    fontSize: tokens.fontSizes.medium,
    spacing: '12px',
  },
  large: {
    fontSize: tokens.fontSizes.medium,
    spacing: '12px',
  },
} as const;

type TextAreaWrapperStyleOptions = {
  isFocused: boolean;
  autoGrow: boolean;
};

export function textAreaWrapper({
  isFocused,
  autoGrow,
}: TextAreaWrapperStyleOptions) {
  return css`
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: ${tokens.zIndex.default};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: -2px;
      border-radius: 6px;
      pointer-events: none;
      transition: box-shadow 125ms ease-out;
    }

    ${isFocused &&
    css`
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    `}

    ${autoGrow &&
    css`
      grid-area: 1 / 1 / 2 / 2;
    `}
  `;
}

const textAreaBaseStyle = css`
  display: block;
  width: 100%;
  height: 100%;
  resize: none;
  word-break: break-word;
  color: ${tokens.colors.navy};
  background-color: ${tokens.colors.white};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.greyDark};
  border-radius: ${tokens.borderRadius.medium};
  outline: 0;

  &:disabled {
    cursor: default;
    opacity: ${tokens.opacity.high};
  }
`;

type TextAreaStyleOptions = {
  hasError: boolean;
  inverted: boolean;
  size: NonNullable<React.ComponentProps<typeof TextArea>['size']>;
};

export function textAreaStyle({
  hasError,
  inverted,
  size,
}: TextAreaStyleOptions) {
  return css`
    ${textAreaBaseStyle}
    font-size: ${size === 'large'
      ? sizeMap.medium.fontSize
      : sizeMap[size].fontSize};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};

    padding: ${tokens.spacing.small} ${sizeMap[size].spacing};

    &::placeholder {
      opacity: 1;
      color: ${inverted
        ? tokens.colors.navySubtleTextOnDark
        : tokens.colors.navySubtleTextOnLight};
    }

    ${hasError &&
    css`
      border-color: ${tokens.colors.redDark};
      box-shadow: 0 0 0 1px ${tokens.colors.redDark};
    `};
  `;
}

export function growWrapperStyle() {
  return css`
    display: grid;
  `;
}

export function fauxGrowElementStyle() {
  return css`
    ${textAreaBaseStyle}
    grid-area: 1 / 1 / 2 / 2;
    visibility: hidden;
    white-space: pre-wrap;
    word-break: break-word;
  `;
}

type CharacterCountStyleOptions = {
  inverted: boolean;
};

export function characterCountStyle({ inverted }: CharacterCountStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    position: absolute;
    z-index: ${tokens.zIndex.default};
    bottom: ${tokens.spacing.small};
    right: 12px;
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
    font-size: ${tokens.fontSizes.small};
    line-height: ${tokens.lineHeights.default};
    pointer-events: none;
  `;
}
