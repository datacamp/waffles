import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { InputField } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <InputField required label="Input field with required indicator" />
      </div>
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <InputField
          inverted
          required
          label="Inverted input field with required indicator"
        />
      </div>
    </>
  );
}

export default Story;
