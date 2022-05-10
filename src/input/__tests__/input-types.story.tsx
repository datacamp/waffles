/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Input } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      {/* Regular  */}
      <div css={wrapperStyle}>
        <Input
          type="password"
          aria-label="Password input"
          value="password1"
          onChange={() => {}}
        />
        <Input
          type="search"
          aria-label="Search input"
          value="intro to python"
          onChange={() => {}}
        />
      </div>
      {/* Inverted  */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Input
          type="password"
          inverted
          aria-label="Inverted password input"
          value="password1"
          onChange={() => {}}
        />
        <Input
          type="search"
          inverted
          aria-label="Inverted search input"
          value="intro to python"
          onChange={() => {}}
        />
      </div>
    </>
  );
}

export default Story;
