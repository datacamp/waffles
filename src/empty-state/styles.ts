import { css } from '@emotion/react';

import { EmptyState } from '.';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

const emptyStateBaseStyle = css`
  display: flex;
  border-radius: ${tokens.borderRadius.medium};
  padding: ${tokens.spacing.large};
  gap: ${tokens.spacing.medium};
  height: 100%;
  width: 100%;
`;

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
    ${emptyStateBaseStyle}

    border: ${tokens.borderWidth.thin} dashed ${hexToRgba(
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

type WrapperStyleOptions = {
  hasSmallWidth: boolean;
};

export function imageStyle({ hasSmallWidth }: WrapperStyleOptions) {
  return css`
    flex-shrink: 0;
    width: ${hasSmallWidth ? '72px' : '100px'};
    height: ${hasSmallWidth ? '72px' : '100px'};
  `;
}

export function contentWrapperStyle() {
  return css`
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
    gap: ${tokens.spacing.small};
  `;
}

type ListItemStyleOptions = {
  hasIcon: boolean;
};

export function listItemStyle({ hasIcon }: ListItemStyleOptions) {
  return css`
    display: ${hasIcon ? 'flex' : 'list-item'};
    list-style: ${hasIcon ? 'none' : 'outside'};
    margin-left: ${hasIcon ? '0' : tokens.spacing.large};
    align-items: center;
    justify-content: flex-start;
    gap: ${tokens.spacing.medium};
    color: inherit;
    line-height: ${tokens.lineHeights.default};

    svg {
      flex-shrink: 0;
    }
  `;
}
