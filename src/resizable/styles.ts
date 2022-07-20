import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Resizable from './resizable';
import { DIVIDER_SIZE } from './constants';

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
};

export function dividerStyle({
  orientation,
  isFocusVisible,
}: DividerStyleOptions) {
  const adjustedDimension = `${
    orientation === 'vertical' ? 'width' : 'height'
  }: ${DIVIDER_SIZE}px`;

  return css`
    flex-shrink: 0;
    display: flex;
    ${adjustedDimension};
    background-color: ${tokens.colors.red};
    cursor: ${orientation === 'vertical' ? 'col-resize' : 'row-resize'};
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
  orientation: NonNullable<
    React.ComponentProps<typeof Resizable>['orientation']
  >;
  dimension?: number;
  isLast: boolean;
};

export function subsectionStyle({
  orientation,
  dimension,
  isLast,
}: SubsectionStyleOptions) {
  const adjustedDimension = `${
    orientation === 'vertical' ? 'width' : 'height'
  }: ${dimension ? `${dimension}px` : 'auto'}`;

  return css`
    ${isLast ? 'flex-grow: 1' : 'flex-shrink: 0'};
    ${adjustedDimension};
    background-color: ${isLast
      ? tokens.colors.beigeMedium
      : tokens.colors.beigeLight};
  `;
}
