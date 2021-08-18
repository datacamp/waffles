import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';

const buttonStyle = css`
  color: ${tokens.colors.navy};
  background-color: ${tokens.colors.green};
  height: ${tokens.sizing.medium};
  min-width: 110px;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.tight};
  outline: 0;
  border-radius: ${tokens.borderRadius.medium};
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${tokens.colors.greenLight};
  }

  &:active {
    transform: scale(0.975);
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} css={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
