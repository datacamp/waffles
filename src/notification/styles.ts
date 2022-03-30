import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';
import Notification from './notification';

const regularVariantMap = {
  default: {
    backgroundColor: hexToRgba(tokens.colors.blue, 0.15),
    borderColor: hexToRgba(tokens.colors.navy, 0.2),
    decorColor: tokens.colors.blue,
  },
  success: {
    backgroundColor: hexToRgba(tokens.colors.green, 0.2),
    borderColor: hexToRgba(tokens.colors.green, 0.8),
    decorColor: tokens.colors.green,
  },
  warning: {
    backgroundColor: hexToRgba(tokens.colors.orangeLight, 0.25),
    borderColor: hexToRgba(tokens.colors.orangeLight, 0.8),
    decorColor: tokens.colors.orangeLight,
  },
  error: {
    backgroundColor: hexToRgba(tokens.colors.red, 0.15),
    borderColor: hexToRgba(tokens.colors.red, tokens.opacity.high),
    decorColor: tokens.colors.red,
  },
};

const invertedVariantMap = {
  default: {
    backgroundColor: hexToRgba(tokens.colors.blue, 0.25),
    borderColor: hexToRgba(tokens.colors.blue, 0.8),
    decorColor: tokens.colors.blue,
  },
  success: {
    backgroundColor: hexToRgba(tokens.colors.green, 0.25),
    borderColor: hexToRgba(tokens.colors.green, tokens.opacity.high),
    decorColor: tokens.colors.green,
  },
  warning: {
    ...regularVariantMap.warning,
  },
  error: {
    ...regularVariantMap.error,
    backgroundColor: hexToRgba(tokens.colors.red, 0.25),
  },
};

type NotificationStyleStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
  inverted: boolean;
};

export function notificationStyle({
  variant,
  inverted,
}: NotificationStyleStyleOptions) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;
  const fillBackgroundColor = inverted
    ? tokens.colors.navy
    : tokens.colors.white;

  return css`
    position: relative;
    display: flex;
    // A little trick to mix multiple colors with different opacity
    background: linear-gradient(
        ${variantMap[variant].backgroundColor},
        ${variantMap[variant].backgroundColor}
      ),
      linear-gradient(${fillBackgroundColor}, ${fillBackgroundColor});
    border: ${tokens.borderWidth.thin} solid ${variantMap[variant].borderColor};
    border-radius: ${tokens.borderRadius.medium};
    width: 100%;
    padding: 12px;
  `;
}

type DecorStyleStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
  inverted: boolean;
};

export function decorStyle({ variant, inverted }: DecorStyleStyleOptions) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: -1px;
    left: -1px;
    bottom: -1px;
    width: 4px;
    background-color: ${variantMap[variant].decorColor};
    border-top-left-radius: ${tokens.borderRadius.medium};
    border-bottom-left-radius: ${tokens.borderRadius.medium};
  `;
}

export function iconStyle() {
  return css`
    position: relative;
    width: ${tokens.sizing.small};
    height: ${tokens.sizing.small};
    flex-shrink: 0;
  `;
}

type IconWrapperStyleOptions = {
  iconColor: string;
};

export function iconWrapperStyle({ iconColor }: IconWrapperStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    color: ${iconColor};
  `;
}

type IconBackgroundStyleOptions = {
  backgroundColor: string;
};

export function iconBackgroundStyle({
  backgroundColor,
}: IconBackgroundStyleOptions) {
  return css`
    position: absolute;
    top: 5px;
    left: 5px;
    width: 14px;
    height: 14px;
    z-index: 5;
    background-color: ${backgroundColor};
    border-radius: ${tokens.borderRadius.circle};
  `;
}

type ContentStyleOptions = {
  closable: boolean;
};

export function contentStyle({ closable }: ContentStyleOptions) {
  return css`
    padding-right: ${closable ? tokens.spacing.small : 0};
    padding-left: ${tokens.spacing.small};
    padding-top: 2px;
    flex-grow: 1;
  `;
}

export function titleStyle() {
  return css`
    margin: 0;
    line-height: ${tokens.lineHeights.relaxed};
  `;
}

export function descriptionStyle() {
  return css`
    margin-top: ${tokens.spacing.xsmall};
    margin-bottom: 0;
  `;
}

type CloseButtonStyleOptions = {
  inverted: boolean;
};

export function closeButtonStyle({ inverted }: CloseButtonStyleOptions) {
  return css`
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    flex-shrink: 0;
  `;
}
