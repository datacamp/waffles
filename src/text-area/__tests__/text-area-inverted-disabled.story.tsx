import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextArea } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        <TextArea
          aria-label="Regular text area"
          placeholder="Type a message here"
        />
      </div>
      {/* Regular disabled */}
      <div css={wrapperStyle}>
        <TextArea
          disabled
          aria-label="Disabled text area"
          placeholder="Type a message here"
        />
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <TextArea
          inverted
          aria-label="Inverted text area"
          placeholder="Type a message here"
        />
      </div>
      {/* Inverted disabled */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <TextArea
          inverted
          disabled
          aria-label="Inverted disabled text area"
          placeholder="Type a message here"
        />
      </div>
    </>
  );
}

export default Story;
