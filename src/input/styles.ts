import { css } from '@emotion/react';

import { tokens } from '../tokens';
import Input from './input';

type InputSize = NonNullable<React.ComponentProps<typeof Input>['size']>;

// Mapping between input's sizes and design tokens

const sizeMap = {
  small: {
    sizing: tokens.sizing.small,
    spacing: '6px',
    spacingWithEnhancer: '26px',
  },
  medium: {
    sizing: tokens.sizing.medium,
    spacing: '12px',
    spacingWithEnhancer: '36px',
  },
  large: {
    sizing: tokens.sizing.large,
    spacing: '12px',
    spacingWithEnhancer: '36px',
  },
} as const;

export function labelStyle() {
  return css`
    display: block;
    width: 100%;
  `;
}

// Various label styles

type CaptionStyleOptions = {
  inverted: boolean;
};

export function captionStyle({ inverted }: CaptionStyleOptions) {
  return css`
    display: block;
    line-height: ${tokens.lineHeights.default};
    font-weight: ${tokens.fontWeights.bold};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

type DescriptionStyleOptions = {
  inverted: boolean;
};

export function descriptionStyle({ inverted }: DescriptionStyleOptions) {
  return css`
    display: block;
    line-height: ${tokens.lineHeights.default};
    margin-top: ${tokens.spacing.xsmall};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

// Main input styles

type InputWrapperStyleOptions = {
  isFocused: boolean;
};

export function inputWrapperStyle({ isFocused }: InputWrapperStyleOptions) {
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
  `;
}

const inputBaseStyle = css`
  display: flex;
  width: 100%;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.medium};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.greyDark};
  border-radius: ${tokens.borderRadius.medium};
  margin-top: ${tokens.spacing.small};
  outline: 0;
  appearance: none;
  cursor: text;

  &:-webkit-autofill {
    box-shadow: 0 0 0 ${tokens.sizing.medium} white inset;
  }

  &:disabled {
    opacity: ${tokens.opacity.high};
    cursor: default;
  }
`;

type InputStyleOptions = {
  hasError: boolean;
  size: InputSize;
  inverted: boolean;
  hasIconLeft: boolean;
  hasEnhancerRight: boolean;
};

export function inputStyle({
  hasError,
  size,
  inverted,
  hasIconLeft,
  hasEnhancerRight,
}: InputStyleOptions) {
  return css`
    ${inputBaseStyle}
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};
    height: ${sizeMap[size].sizing};
    padding-left: ${hasIconLeft
      ? sizeMap[size].spacingWithEnhancer
      : sizeMap[size].spacing};
    padding-right: ${hasEnhancerRight
      ? sizeMap[size].spacingWithEnhancer
      : sizeMap[size].spacing};

    &::placeholder {
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

// Error and required styles

type ErrorStyleOptions = {
  inverted: boolean;
};

export function errorStyle({ inverted }: ErrorStyleOptions) {
  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    bottom: 0;
    left: 0;
    transform: translateY(20px);
    color: ${inverted ? tokens.colors.red : tokens.colors.redDarkText};
  `;
}

export function requiredWrapperStyle() {
  return css`
    display: flex;
  `;
}

type RequiredStyleOptions = {
  inverted: boolean;
};

export function requiredStyle({ inverted }: RequiredStyleOptions) {
  return css`
    font-size: ${tokens.fontSizes.small};
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
    flex-grow: 1;
    text-align: right;
  `;
}

type RequiredBulletStyleOptions = {
  inverted: boolean;
};

export function requiredBulletStyle({ inverted }: RequiredBulletStyleOptions) {
  return css`
    font-size: ${tokens.fontSizes.medium};
    color: ${inverted ? tokens.colors.red : tokens.colors.redDark};
  `;
}

// Enhancer styles

const enhancerBaseStyle = css`
  position: absolute;
  z-index: ${tokens.zIndex.default};
  display: flex;
  height: 100%;
  align-items: center;
  pointer-events: none;
`;

type IconLeftStyleOptions = {
  size: InputSize;
  inverted: boolean;
};

export function iconLeftStyle({ size, inverted }: IconLeftStyleOptions) {
  return css`
    ${enhancerBaseStyle};
    top: 0;
    left: ${sizeMap[size].spacing};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

type EnhancerRightStyleOptions = {
  size: InputSize;
  inverted: boolean;
};

export function enhancerRightStyle({
  size,
  inverted,
}: EnhancerRightStyleOptions) {
  return css`
    ${enhancerBaseStyle};
    top: 0;
    right: ${sizeMap[size].spacing};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

type EnhancerStyleOptions = {
  isFocusVisible: boolean;
};

export function enhancerStyle({ isFocusVisible }: EnhancerStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    pointer-events: auto;
    cursor: pointer;
    padding: 0;
    border: 0;
    border-radius: ${tokens.borderRadius.medium};
    padding: 2px;
    background-color: transparent;
    color: inherit;
    outline: 0;

    ${isFocusVisible &&
    css`
      box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
    `}
  `;
}
