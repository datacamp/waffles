/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { InputField } from '../index';

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
        <InputField
          label="Password input field"
          type="password"
          value="admin123"
          onChange={() => {}}
        />
        <InputField
          label="Search input field"
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
        <InputField
          label="Password input field"
          type="password"
          inverted
          value="admin123"
          onChange={() => {}}
        />
        <InputField
          label="Search input field"
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
