import { css } from '@emotion/react';

import { tokens } from '../tokens';

import NotificationCard from './notification-card';

type NotificationStyleStyleOptions = {
  inverted: boolean;
};

export function notificationStyle({ inverted }: NotificationStyleStyleOptions) {
  return css`
    position: relative;
    display: flex;
    background-color: ${inverted ? tokens.colors.navy : tokens.colors.white};
    border: ${tokens.borderWidth.thin} solid
      ${inverted ? tokens.colors.navy : tokens.colors.white};
    border-radius: ${tokens.borderRadius.medium};
    padding: 12px;
  `;
}

const decorVariantMap = {
  default: {
    color: tokens.colors.blue,
  },
  success: {
    color: tokens.colors.green,
  },
  warning: {
    color: tokens.colors.orangeLight,
  },
  error: {
    color: tokens.colors.red,
  },
  upgrade: {
    color: tokens.colors.purple,
  },
};

const invertedDecorVariantMap = {
  ...decorVariantMap,
  upgrade: {
    color: tokens.colors.purpleLight,
  },
};

type DecorStyleStyleOptions = {
  variant: NonNullable<
    React.ComponentProps<typeof NotificationCard>['variant']
  >;
  inverted: boolean;
};

export function decorStyle({ variant, inverted }: DecorStyleStyleOptions) {
  const variantMap = inverted ? invertedDecorVariantMap : decorVariantMap;

  return css`
    position: absolute;
    z-index: ${tokens.zIndex.default};
    top: -1px;
    left: -1px;
    bottom: -1px;
    width: 4px;
    background-color: ${variantMap[variant].color};
    border-top-left-radius: ${tokens.borderRadius.medium};
    border-bottom-left-radius: ${tokens.borderRadius.medium};
  `;
}

export function iconWrapperStyle() {
  return css`
    position: relative;
    width: ${tokens.sizing.small};
    height: ${tokens.sizing.small};
    flex-shrink: 0;
  `;
}

type IconStyleOptions = {
  iconColor: string;
};

export function iconStyle({ iconColor }: IconStyleOptions) {
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
    top: 7px;
    left: 7px;
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
    ${closable && `padding-right: ${tokens.spacing.small};`}
    padding-left: ${tokens.spacing.small};
    flex-grow: 1;
    align-self: center;
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
