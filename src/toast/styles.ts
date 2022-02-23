import { css } from '@emotion/react';

import { tokens } from '../tokens';
import Toast from './toast';

const variantMap = {
  default: {
    color: tokens.colors.purple,
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
};

type ToastStyleOptions = {
  variant: NonNullable<React.ComponentProps<typeof Toast>['variant']>;
};

export function toastStyle({ variant }: ToastStyleOptions) {
  return css`
    display: flex;
    background-color: ${tokens.colors.white};
    border-radius: ${tokens.borderRadius.medium};
    width: 360px;
    box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.thick};
    padding: ${tokens.spacing.medium};
    border-left: ${tokens.borderWidth.xthick} solid ${variantMap[variant].color};
  `;
}

export function iconStyle() {
  return css`
    display: flex;
    flex-shrink: 0;
    padding-right: ${tokens.spacing.small};
  `;
}

export function titleStyle() {
  return css`
    margin: 0;
  `;
}

export function descriptionStyle() {
  return css`
    margin-top: ${tokens.spacing.small};
    margin-bottom: 0;
  `;
}
