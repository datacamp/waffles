import { css } from '@emotion/react';

import { EmptyState } from '.';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

function emptyStateBaseStyle() {
  return css`
    display: flex;
    font-family: ${tokens.fontFamilies.sansSerif};
    font-size: ${tokens.fontSizes.medium};
    border-style: dashed;
    border-radius: ${tokens.borderRadius.medium};
    border-width: 1px;
    padding: ${tokens.spacing.large};
    gap: ${tokens.spacing.medium};
    height: 100%;
    width: 100%;
  `;
}

type EmptyStateStyleOptions = {
  orientation: NonNullable<
    React.ComponentProps<typeof EmptyState>['orientation']
  >;
  isCentered: boolean;
  inverted: boolean;
};

export function emptyStateStyle({
  orientation,
  isCentered,
  inverted,
}: EmptyStateStyleOptions) {
  return css`
    ${emptyStateBaseStyle()}

    border-color: ${hexToRgba(
      inverted ? tokens.colors.white : tokens.colors.navy,
      tokens.opacity.low,
    )};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    flex-direction: ${orientation === 'horizontal' ? 'row' : 'column'};
    text-align: ${isCentered && orientation === 'vertical' ? 'center' : 'left'};
    align-items: ${isCentered && orientation === 'vertical'
      ? 'center'
      : 'flex-start'};

    ul {
      align-items: ${isCentered && orientation === 'vertical'
        ? 'center'
        : 'flex-start'};
    }
  `;
}

export function imageStyle() {
  return css`
    flex-shrink: 0;
    width: 100px;
    height: 100px;
  `;
}

export function contentWrapperStyle() {
  return css`
    display: flex;
    flex-direction: column;
    max-width: 650px;
  `;
}

export function headingStyle() {
  return css`
    line-height: ${tokens.lineHeights.relaxed};
    margin: 0;
    padding-bottom: ${tokens.spacing.small};
  `;
}

export function listStyle() {
  return css`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: ${tokens.spacing.medium} 0 ${tokens.spacing.large};
    list-style: none;
    gap: ${tokens.spacing.small};
  `;
}

export function listItemStyle() {
  return css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${tokens.spacing.medium};
    line-height: ${tokens.lineHeights.default};

    svg {
      flex-shrink: 0;
    }
  `;
}
