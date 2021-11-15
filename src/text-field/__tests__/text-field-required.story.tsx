import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextField } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <TextField required label="Text field with required indicator" />
      </div>
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <TextField
          inverted
          required
          label="Inverted text field with required indicator"
        />
      </div>
    </>
  );
}

export default Story;
