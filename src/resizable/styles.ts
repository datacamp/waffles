import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Resizable from './resizable';
import { DIVIDER_HITBOX_SIZE, DIVIDER_SEPARATOR_SIZE } from './constants';

type ContainerStyleOptions = {
  layout: NonNullable<React.ComponentProps<typeof Resizable>['layout']>;
};

export function containerStyle({ layout }: ContainerStyleOptions) {
  return css`
    display: flex;
    flex-direction: ${layout === 'column' ? 'row' : 'column'};
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;
}

type DividerStyleOptions = {
  layout: NonNullable<React.ComponentProps<typeof Resizable>['layout']>;
  isFocusVisible: boolean;
  isDragging: boolean;
  inverted: boolean;
};

export function dividerStyle({
  layout,
  isFocusVisible,
  isDragging,
  inverted,
}: DividerStyleOptions) {
  const adjustedDimension = `${
    layout === 'column' ? 'width' : 'height'
  }: ${DIVIDER_HITBOX_SIZE}px`;
  const selectedDividerHighlight = css`
    background-color: ${inverted ? tokens.colors.blue : tokens.colors.blueDark};
    box-shadow: 0 0 0 1px
      ${inverted ? tokens.colors.blue : tokens.colors.blueDark};
  `;

  return css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    ${adjustedDimension};
    cursor: ${layout === 'column' ? 'col-resize' : 'row-resize'};
    outline: 0;
    overflow: hidden;

    ${isDragging &&
    css`
      & div {
        ${selectedDividerHighlight}
      }
    `}

    ${isFocusVisible &&
    css`
      & div {
        ${selectedDividerHighlight}
      }
    `}

    &:hover div {
      ${selectedDividerHighlight}
    }
  `;
}

type DividerLineStyleOptions = {
  layout: NonNullable<React.ComponentProps<typeof Resizable>['layout']>;
  showSeparator: boolean;
  inverted: boolean;
};

export function dividerSeparatorStyle({
  layout,
  showSeparator,
  inverted,
}: DividerLineStyleOptions) {
  const separatorSize = `${
    layout === 'column' ? 'width' : 'height'
  }: ${DIVIDER_SEPARATOR_SIZE}px`;

  return css`
    ${separatorSize};
    ${layout === 'column' ? 'height' : 'width'}: 100%;
    background-color: ${showSeparator
      ? hexToRgba(inverted ? tokens.colors.white : tokens.colors.navy, 0.15)
      : 'transparent'};
    transition: background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
  `;
}

type PanelStyleOptions = {
  layout: NonNullable<React.ComponentProps<typeof Resizable>['layout']>;
  isDragging: boolean;
  compensateForSeparator: boolean;
};

export function panelStyle({
  layout,
  isDragging,
  compensateForSeparator,
}: PanelStyleOptions) {
  const marginHitboxCompensation =
    (DIVIDER_HITBOX_SIZE - DIVIDER_SEPARATOR_SIZE) / 2;
  const adjustedMargins =
    layout === 'column'
      ? css`
          margin-left: -${marginHitboxCompensation}px;
          margin-right: -${marginHitboxCompensation}px;
        `
      : css`
          margin-top: -${marginHitboxCompensation}px;
          margin-bottom: -${marginHitboxCompensation}px;
        `;

  return css`
    overflow: hidden;

    ${isDragging &&
    css`
      cursor: ${layout === 'column' ? 'col-resize' : 'row-resize'};
      user-select: none;
    `};

    &:last-of-type {
      flex-grow: 1;
    }

    &:not(:last-of-type) {
      flex-shrink: 0;
    }

    ${compensateForSeparator &&
    css`
      ${adjustedMargins}

      &:first-of-type {
        ${layout === 'column' ? 'margin-left' : 'margin-top'}: 0;
      }

      &:last-of-type {
        ${layout === 'column' ? 'margin-right' : 'margin-bottom'}: 0;
      }
    `}
  `;
}
