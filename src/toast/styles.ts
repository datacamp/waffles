import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';
import { toastEnter, toastExit } from './keyframes';

type ToastsListStyleOptions = {
  offset: string;
};

export function toastsListStyle({ offset }: ToastsListStyleOptions) {
  return css`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: ${tokens.zIndex.toast};
    top: 0;
    width: 100%;
    margin: 0;
    padding-left: ${tokens.spacing.medium};
    padding-right: ${tokens.spacing.medium};
    padding-top: ${offset};
    padding-bottom: 0;
    pointer-events: none;

    ${mediaQuery.aboveSmall} {
      width: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  `;
}

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

export function toastStyle() {
  return css`
    width: 100%;
    margin-top: ${tokens.spacing.medium};
    box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.thick};
    user-select: none;
    pointer-events: all;

    ${mediaQuery.aboveSmall} {
      width: 360px;
    }
  `;
}

export function titleStyle() {
  return css`
    margin: 0;
    padding-top: 2px;
    line-height: ${tokens.lineHeights.relaxed};
  `;
}

export function descriptionStyle() {
  return css`
    margin-top: ${tokens.spacing.xsmall};
    margin-bottom: 0;
  `;
}
