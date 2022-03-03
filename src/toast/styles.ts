import { css } from '@emotion/react';

import { tokens } from '../tokens';
import Toast from './toast';
import { toastEnter, toastExit } from './keyframes';

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

type AnimatedWrapperOptions = {
  isVisible: boolean;
  height: string;
};

export function animatedWrapperStyle({
  isVisible,
  height,
}: AnimatedWrapperOptions) {
  return css`
    list-style: none;
    // Animation
    height: ${height};
    transform-origin: 50% 20%;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: ${isVisible ? toastEnter() : toastExit({ height })} 500ms
      ${isVisible
        ? 'cubic-bezier(0.2, 1, 0.4, 1)'
        : 'cubic-bezier(0.4, 1, 0.4, 0.8)'}
      forwards;
  `;
}

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
    margin-top: ${tokens.spacing.medium};
    padding: 12px;
    border-left: ${tokens.borderWidth.xthick} solid ${variantMap[variant].color};
    user-select: none;
  `;
}

export function iconStyle() {
  return css`
    width: ${tokens.sizing.small};
    height: ${tokens.sizing.small};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
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
    pointer-events: all;
  `;
}

export function toastsListStyle() {
  return css`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: ${tokens.zIndex.toast};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 0;
    pointer-events: none;
  `;
}
