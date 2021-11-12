/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextField } from '../index';

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
        <TextField
          label="Password text field"
          type="password"
          value="admin123"
          onChange={() => {}}
        />
        <TextField
          label="Search text field"
          type="search"
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
        <TextField
          label="Password text field"
          type="password"
          inverted
          value="admin123"
          onChange={() => {}}
        />
        <TextField
          label="Search text field"
          type="search"
          inverted
          value="intro to sql"
          onChange={() => {}}
        />
      </div>
    </>
  );
}

export default Story;
