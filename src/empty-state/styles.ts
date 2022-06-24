import { css } from '@emotion/react';

import { EmptyState } from '.';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

const emptyStateBaseStyle = css`
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

    border-color: ${hexToRgba(
      inverted ? tokens.colors.white : tokens.colors.navy,
      tokens.opacity.low,
    )};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    flex-direction: ${direction};
    text-align: ${isCentered && direction === 'column' ? 'center' : 'left'};
    align-items: ${isCentered && direction === 'column'
      ? 'center'
      : 'flex-start'};

    ul {
      align-items: ${isCentered && direction === 'column'
        ? 'center'
        : 'flex-start'};
    }

    li {
      justify-content: flex-start;
    }
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
  max-width: 650px;
`;

export const headingStyle = css`
  line-height: ${tokens.lineHeights.relaxed};
  margin: 0;
  padding-bottom: ${tokens.spacing.small};
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: ${tokens.spacing.medium} 0 ${tokens.spacing.large};
  list-style: none;
  gap: ${tokens.spacing.small};
`;

export const listItemStyle = css`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.medium};
  line-height: ${tokens.lineHeights.default};

  svg {
    flex-shrink: 0;
  }
`;
