import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';

export function contentContainerStyle() {
  return css`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding: ${tokens.spacing.medium};
    overflow: hidden;

    ${mediaQuery.aboveMedium} {
      padding: ${tokens.spacing.xlarge};
    }
  `;
}
