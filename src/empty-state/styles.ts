import { css } from '@emotion/react';

import { EmptyState } from '.';

import { tokens } from '../tokens';

const emptyStateBaseStyle = css`
  display: flex;
  border: 2px dashed ${tokens.colors.red};
  border-radius: 4px;
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
  // TODO: Handle breakpoints
  return css`
    ${emptyStateBaseStyle}

    flex-direction: ${direction};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    text-align: ${isCentered && direction === 'column' ? 'center' : 'left'};
    align-items: ${isCentered && direction === 'column'
      ? 'center'
      : 'baseline'};
    justify-content: ${isCentered && direction === 'row' ? 'center' : 'left'};

    li {
      justify-content: ${isCentered && direction === 'column'
        ? 'center'
        : 'flex-start'};
    }
  `;
}

export const contentWrapperStyle = css`
  flex-direction: column;
  max-width: 650px;
`;

export const contentStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
`;

export const listStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const listItemStyle = css`
  display: flex;
  align-items: center;
  gap: 16px;
  line-height: normal;
`;
