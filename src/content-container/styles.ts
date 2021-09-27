import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../media-query';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  max-width: 1000px;
  overflow: hidden;

  ${mediaQuery.large} {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
  }

  ${mediaQuery.medium} {
    padding: ${tokens.spacing.xlarge};
  }
`;

type ContentContainerStyleOptions = {
  noSidebar: boolean;
};

export function contentContainerStyle({
  noSidebar,
}: ContentContainerStyleOptions) {
  return css`
    ${wrapperStyle}
    ${noSidebar &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
  `;
}
