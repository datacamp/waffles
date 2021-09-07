import { css } from '@emotion/react';

import { tokens } from '../tokens';

export function codeBlockStyle() {
  return css`
    padding: ${tokens.spacing.small};
    margin: 0;
    tab-size: 4;
    white-space: pre;
    overflow-x: auto;
  `;
}
