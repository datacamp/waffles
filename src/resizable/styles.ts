import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Resizable from './resizable';
import { DIVIDER_HITBOX_SIZE, DIVIDER_LINE_SIZE } from './constants';

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

const selectedDividerStyle = css`
  background-color: ${tokens.colors.blueDark};
  box-shadow: 0 0 0 1px ${tokens.colors.blueDark};
`;

type DividerStyleOptions = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  isFocusVisible: boolean;
  isDragging: boolean;
};

export function dividerStyle({
  orientation,
  isFocusVisible,
  isDragging,
}: DividerStyleOptions) {
  const adjustedDimension = `${
    orientation === 'vertical' ? 'width' : 'height'
  }: ${DIVIDER_HITBOX_SIZE}px`;

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
        ${selectedDividerStyle}
      }
    `}

    ${isFocusVisible &&
    css`
      & div {
        ${selectedDividerStyle}
      }
    `}

    &:hover div {
      ${selectedDividerStyle}
    }
  `;
}

type DividerLineStyleOptions = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
};

export function dividerLineStyle({ orientation }: DividerLineStyleOptions) {
  return css`
    ${orientation === 'vertical' ? 'width' : 'height'}: 2px;
    ${orientation === 'vertical' ? 'height' : 'width'}: 100%;
    background-color: ${hexToRgba(tokens.colors.navy, 0.15)};
    transition: background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
  `;
}

type SubsectionStyleOptions = {
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  dimension?: number;
  isDragging: boolean;
  isLast: boolean;
};

export function subsectionStyle({
  orientation,
  dimension,
  isDragging,
  isLast,
}: SubsectionStyleOptions) {
  const adjustedDimension = `${
    orientation === 'vertical' ? 'width' : 'height'
  }: ${dimension ? `${dimension}px` : 'auto'}`;
  const marginHitboxCompensation =
    (DIVIDER_HITBOX_SIZE - DIVIDER_LINE_SIZE) / 2;

  return css`
    ${isLast ? 'flex-grow: 1' : 'flex-shrink: 0'};
    ${isDragging &&
    `cursor: ${orientation === 'vertical' ? 'col-resize' : 'row-resize'}`};
    ${adjustedDimension};
    margin-left: -${marginHitboxCompensation}px;
    margin-right: -${marginHitboxCompensation}px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  `;
}
