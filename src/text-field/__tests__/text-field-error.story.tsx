/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextField } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-bottom: ${tokens.spacing.xlarge};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <TextField
          label="Text field with error"
          value="Invalid value"
          onChange={() => {}}
          error="Provide correct value."
        />
      </div>
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <TextField
          inverted
          label="Inverted text field with error"
          value="Invalid value"
          onChange={() => {}}
          error="Provide correct value."
        />
      </div>
    </>
  );
}

export default Story;
