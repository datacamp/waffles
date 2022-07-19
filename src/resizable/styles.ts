import { css } from '@emotion/react';

import { tokens } from '../tokens';

import { DIVIDER_WIDTH } from './constants';

export function wrapperStyle() {
  return css`
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;
}

type DividerStyleOptions = {
  isFocusVisible: boolean;
};

export function dividerStyle({ isFocusVisible }: DividerStyleOptions) {
  return css`
    flex-shrink: 0;
    display: flex;
    width: ${DIVIDER_WIDTH}px;
    background-color: ${tokens.colors.red};
    cursor: col-resize;
    transition: background-color 150ms ease-in-out;
    outline: 0;

    &:hover {
      background-color: ${tokens.colors.blueLight};
    }

    ${isFocusVisible &&
    css`
      outline: 2px solid ${tokens.colors.blueDark};
      outline-offset: -1px;
    `}
  `;
}

type SubsectionStyleOptions = {
  width?: number;
  isLast: boolean;
};

export function subsectionStyle({ width, isLast }: SubsectionStyleOptions) {
  return css`
    ${isLast ? 'flex-grow: 1' : 'flex-shrink: 0'};
    width: ${width ? `${width}px` : 'auto'};
    background-color: ${isLast
      ? tokens.colors.beigeMedium
      : tokens.colors.beigeLight};
  `;
}
