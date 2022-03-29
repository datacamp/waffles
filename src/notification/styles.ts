import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';
import Notification from './notification';

const variantMap = {
  default: {
    backgroundColor: hexToRgba(tokens.colors.blue, 0.2),
    borderColor: hexToRgba(tokens.colors.navy, 0.2),
    decorColor: tokens.colors.blue,
  },
  success: {
    backgroundColor: hexToRgba(tokens.colors.green, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.green, tokens.opacity.high),
    decorColor: tokens.colors.green,
  },
  warning: {
    backgroundColor: hexToRgba(tokens.colors.orangeLight, 0.2),
    borderColor: hexToRgba(tokens.colors.orangeLight, 0.8),
    decorColor: tokens.colors.orangeLight,
  },
  error: {
    backgroundColor: hexToRgba(tokens.colors.red, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.red, tokens.opacity.high),
    decorColor: tokens.colors.red,
  },
};

type NotificationStyleStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
};

export function notificationStyle({ variant }: NotificationStyleStyleOptions) {
  return css`
    position: relative;
    display: flex;
    // A little trick to mix multiple colors with different opacity
    background: linear-gradient(
        ${variantMap[variant].backgroundColor},
        ${variantMap[variant].backgroundColor}
      ),
      linear-gradient(${tokens.colors.white}, ${tokens.colors.white});
    border: ${tokens.borderWidth.thin} solid ${variantMap[variant].borderColor};
    border-radius: ${tokens.borderRadius.medium};
    width: 360px;
    padding: 12px;
  `;
}

type DecorStyleStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
};

export function decorStyle({ variant }: DecorStyleStyleOptions) {
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

export function contentStyle() {
  return css`
    padding-right: ${tokens.spacing.small};
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

export function closeButtonStyle() {
  return css`
    color: ${tokens.colors.navy};
    flex-shrink: 0;
  `;
}
