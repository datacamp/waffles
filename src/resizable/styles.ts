import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Resizable from './resizable';
import { DIVIDER_HITBOX_SIZE, DIVIDER_SEPARATOR_SIZE } from './constants';

type ContainerStyleOptions = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
};

export function containerStyle({ orientation }: ContainerStyleOptions) {
  return css`
    display: flex;
    flex-direction: ${orientation === 'vertical' ? 'row' : 'column'};
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;
}

type DividerStyleOptions = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  isFocusVisible: boolean;
  isDragging: boolean;
  inverted: boolean;
};

export function dividerStyle({
  orientation,
  isFocusVisible,
  isDragging,
  inverted,
}: DividerStyleOptions) {
  const adjustedDimension = `${
    orientation === 'vertical' ? 'width' : 'height'
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
    cursor: ${orientation === 'vertical' ? 'col-resize' : 'row-resize'};
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
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  showSeparator: boolean;
  inverted: boolean;
};

export function dividerSeparatorStyle({
  orientation,
  showSeparator,
  inverted,
}: DividerLineStyleOptions) {
  const separatorSize = `${
    orientation === 'vertical' ? 'width' : 'height'
  }: ${DIVIDER_SEPARATOR_SIZE}px`;

  return css`
    ${separatorSize};
    ${orientation === 'vertical' ? 'height' : 'width'}: 100%;
    background-color: ${showSeparator
      ? hexToRgba(inverted ? tokens.colors.white : tokens.colors.navy, 0.15)
      : 'transparent'};
    transition: background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
  `;
}

type SubsectionStyleOptions = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  isDragging: boolean;
  compensateForSeparator: boolean;
};

export function subsectionStyle({
  orientation,
  isDragging,
  compensateForSeparator,
}: SubsectionStyleOptions) {
  const marginHitboxCompensation =
    (DIVIDER_HITBOX_SIZE - DIVIDER_SEPARATOR_SIZE) / 2;
  const adjustedMargins =
    orientation === 'vertical'
      ? css`
          margin-left: -${marginHitboxCompensation}px;
          margin-right: -${marginHitboxCompensation}px;
        `
      : css`
          margin-top: -${marginHitboxCompensation}px;
          margin-bottom: -${marginHitboxCompensation}px;
        `;

  return css`
    ${isDragging &&
    `cursor: ${orientation === 'vertical' ? 'col-resize' : 'row-resize'}`};

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
        ${orientation === 'vertical' ? 'margin-left' : 'margin-top'}: 0;
      }

      &:last-of-type {
        ${orientation === 'vertical' ? 'margin-right' : 'margin-bottom'}: 0;
      }
    `}
  `;
}
