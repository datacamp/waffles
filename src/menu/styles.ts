import { css } from '@emotion/react';

import { tokens } from '../tokens';

const dropdownBaseStyle = css`
  position: absolute; // Use absolute position, expected by float-ui default strategy
  z-index: ${tokens.zIndex.dropdown};
  margin: 0;
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.white};
  border-radius: ${tokens.borderRadius.medium};
  box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.thick};
  width: 200px;
`;

type DropdownStyleOptions = {
  x: number | null;
  y: number | null;
};

export function dropdownStyle({ x, y }: DropdownStyleOptions) {
  return css`
    ${dropdownBaseStyle}
    top: ${y ? y : 0}px;
    left: ${x ? x : 0}px;
  `;
}
