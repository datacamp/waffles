import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextArea } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <TextArea required label="Text area with required indicator" rows={3} />
      </div>
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <TextArea
          inverted
          required
          label="Inverted text area with required indicator"
          value="Invalid value"
          rows={3}
        />
      </div>
    </>
  );
}

export default Story;
