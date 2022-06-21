import { css } from '@emotion/react';

import { EmptyState } from '.';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

const emptyStateBaseStyle = css`
  display: flex;
  border-radius: ${tokens.borderRadius.medium};
  padding: ${tokens.spacing.large};
  gap: ${tokens.spacing.large};
  height: 100%;
  width: 100%;
`;

type EmptyStateStyleOptions = {
  direction: NonNullable<React.ComponentProps<typeof EmptyState>['direction']>;
  isCentered: boolean;
  inverted: boolean;
};

export function emptyStateStyle({
  direction,
  isCentered,
  inverted,
}: EmptyStateStyleOptions) {
  return css`
    ${emptyStateBaseStyle}

    border: 2px dashed ${hexToRgba(
      inverted ? tokens.colors.white : tokens.colors.navy,
      tokens.opacity.low,
    )};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    flex-direction: ${direction};
    text-align: ${isCentered && direction === 'column' ? 'center' : 'left'};
    align-items: ${isCentered && direction === 'column'
      ? 'center'
      : 'flex-start'};
    justify-content: ${isCentered && direction === 'row' ? 'center' : 'left'};

    ul {
      align-items: ${isCentered && direction === 'column'
        ? 'center'
        : 'flex-start'};
    }

    li {
      justify-content: flex-start;
    }

    // TODO: Handle forcing column layout for small sizes - @ixTec
  `;
}

export const imageStyle = css`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
`;

export const contentWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
  max-width: 650px;
`;

export const contentStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;
  font-family: ${tokens.fontFamilies.sansSerif};
  margin: 0;
  padding: 0;
  list-style: none;
  gap: ${tokens.spacing.small};
`;

export const listItemStyle = css`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.medium};
  line-height: normal;

  svg {
    flex-shrink: 0;
  }
`;
