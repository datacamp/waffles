import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Notification from './notification';
import { notificationExit } from './keyframes';

type LayoutType = 'horizontal' | 'vertical';

const regularVariantMap = {
  default: {
    backgroundColor: hexToRgba(tokens.colors.blue, 0.15),
    borderColor: hexToRgba(tokens.colors.navy, 0.2),
  },
  success: {
    backgroundColor: hexToRgba(tokens.colors.green, 0.2),
    borderColor: hexToRgba(tokens.colors.green, 0.8),
  },
  warning: {
    backgroundColor: hexToRgba(tokens.colors.orangeLight, 0.25),
    borderColor: hexToRgba(tokens.colors.orangeLight, 0.8),
  },
  error: {
    backgroundColor: hexToRgba(tokens.colors.red, 0.15),
    borderColor: hexToRgba(tokens.colors.red, tokens.opacity.high),
  },
  upgrade: {
    backgroundColor: hexToRgba(tokens.colors.purple, 0.15),
    borderColor: hexToRgba(tokens.colors.purple, tokens.opacity.high),
  },
};

const invertedVariantMap = {
  default: {
    backgroundColor: hexToRgba(tokens.colors.blue, 0.25),
    borderColor: hexToRgba(tokens.colors.blue, 0.8),
  },
  success: {
    backgroundColor: hexToRgba(tokens.colors.green, 0.25),
    borderColor: hexToRgba(tokens.colors.green, tokens.opacity.high),
  },
  warning: {
    ...regularVariantMap.warning,
  },
  error: {
    ...regularVariantMap.error,
    backgroundColor: hexToRgba(tokens.colors.red, 0.25),
  },
  upgrade: {
    backgroundColor: hexToRgba(tokens.colors.purpleLight, 0.25),
    borderColor: hexToRgba(tokens.colors.purpleLight, 0.8),
  },
};

type NotificationStyleStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
  inverted: boolean;
  isVisible: boolean;
};

export function notificationStyle({
  variant,
  inverted,
  isVisible,
}: NotificationStyleStyleOptions) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;
  const fillBackgroundColor = inverted
    ? tokens.colors.navy
    : tokens.colors.white;

  return css`
    // A little trick to mix multiple colors with different opacity
    background: linear-gradient(
        ${variantMap[variant].backgroundColor},
        ${variantMap[variant].backgroundColor}
      ),
      linear-gradient(${fillBackgroundColor}, ${fillBackgroundColor});
    border: ${tokens.borderWidth.thin} solid ${variantMap[variant].borderColor};
    width: 100%;
    // Animation
    opacity: 1;
    ${!isVisible &&
    css`
      animation: ${notificationExit()} 300ms ease-out forwards;
    `}
  `;
}

type ContentStyleOptions = {
  layout: LayoutType;
};

export function contentStyle({ layout }: ContentStyleOptions) {
  return css`
    display: flex;
    flex-direction: ${layout === 'horizontal' ? 'row' : 'column'};
    flex-grow: 1;
  `;
}

type ActionStyleOptions = {
  layout: LayoutType;
  isUpgrade: boolean;
};

export function actionStyle({ layout, isUpgrade }: ActionStyleOptions) {
  function calculateLeftMargin() {
    if (layout === 'horizontal') {
      return tokens.spacing.small;
    }

    if (isUpgrade) {
      return 0;
    }

    return `-${tokens.spacing.small}`;
  }

  function calculateTopMargin() {
    if (layout === 'horizontal') {
      return 0;
    }

    if (isUpgrade) {
      return tokens.spacing.small;
    }

    return tokens.spacing.xsmall;
  }

  return css`
    margin-left: ${calculateLeftMargin()};
    margin-top: ${calculateTopMargin()};
    flex-shrink: 0;
  `;
}

type TextContentStyle = {
  layout: LayoutType;
};

export function textContentStyle({ layout }: TextContentStyle) {
  return css`
    ${layout === 'horizontal' &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
    flex-grow: 1;
  `;
}

export function titleStyle() {
  return css`
    margin: 0;
    margin-right: ${tokens.spacing.small};
    padding: 4px 0;
    line-height: ${tokens.lineHeights.relaxed};
  `;
}

export function descriptionStyle() {
  return css`
    margin: 0;
    padding: 4px 0;
  `;
}
