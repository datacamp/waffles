import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  max-width: 1000px;
  overflow: hidden;

  ${mediaQuery.aboveMedium} {
    padding: ${tokens.spacing.xlarge};
  }

  ${mediaQuery.aboveLarge} {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
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
