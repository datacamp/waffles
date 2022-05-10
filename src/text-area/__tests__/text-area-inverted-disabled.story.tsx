/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { TextArea } from '../index';
import { tokens } from '../../tokens';

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
      {/* Regular with character count */}
      <div css={wrapperStyle}>
        <TextArea
          showCharacterCount
          maxLength={100}
          aria-label="Regular text area with character count"
          value="Data Camp"
          onChange={() => {}}
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
      {/* Inverted with character count */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <TextArea
          inverted
          showCharacterCount
          maxLength={100}
          aria-label="Inverted text area with character count"
          value="Data Camp"
          onChange={() => {}}
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
