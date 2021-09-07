import { css } from '@emotion/react';

import { tokens } from '../tokens';

type CodeBlockStyleOptions = {
  isFocusVisible: boolean;
};

export function codeBlockStyle({ isFocusVisible }: CodeBlockStyleOptions) {
  return css`
    padding: ${tokens.spacing.small};
    margin: 0;
    tab-size: 4;
    white-space: pre;
    overflow-x: auto;
    outline: 0;

    ${isFocusVisible &&
    css`
      box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
    `};
  `;
}
