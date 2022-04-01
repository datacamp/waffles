import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';
import Notification from './notification';

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
    // A little trick to mix multiple colors with different opacity
    background: linear-gradient(
        ${variantMap[variant].backgroundColor},
        ${variantMap[variant].backgroundColor}
      ),
      linear-gradient(${fillBackgroundColor}, ${fillBackgroundColor});
    border: ${tokens.borderWidth.thin} solid ${variantMap[variant].borderColor};
    width: 100%;
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
};

export function actionStyle({ layout }: ActionStyleOptions) {
  return css`
    margin-left: ${layout === 'horizontal'
      ? tokens.spacing.small
      : `-${tokens.spacing.small}`};
    margin-top: ${layout === 'horizontal' ? 0 : tokens.spacing.xsmall};
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
    padding-top: 2px;
    padding-bottom: 2px;
    line-height: ${tokens.lineHeights.relaxed};
  `;
}

export function descriptionStyle() {
  return css`
    margin: 0;
    padding-top: 2px;
  `;
}
