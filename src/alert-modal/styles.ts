import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';

export function dialogStyle() {
  return css`
    max-width: 480px;

    ${mediaQuery.aboveSmall} {
      min-width: 300px;
    }
  `;
}

export function bodyStyle() {
  return css`
    padding-top: 0;
    padding-right: ${tokens.spacing.large};
    padding-bottom: ${tokens.spacing.small};
    padding-left: ${tokens.spacing.large};
    flex-grow: 1;
    overflow: hidden;
    text-align: center;
  `;
}

export function headerStyle() {
  return css`
    text-align: center;
    padding-left: 48px;
  `;
}

export function footerStyle() {
  return css`
    padding: ${tokens.spacing.large};
    padding-top: ${tokens.spacing.medium};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
}
