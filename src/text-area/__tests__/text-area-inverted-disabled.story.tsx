import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextArea } from '../index';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.large};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        <TextArea
          label="Regular text area"
          description="Description of regular text area"
          placeholder="Type a message here"
        />
      </div>
      {/* Regular disabled */}
      <div css={wrapperStyle}>
        <TextArea
          disabled
          label="Disabled text area"
          description="Description of disabled text field"
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
          label="Inverted text area"
          description="Description of inverted text area"
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
          label="Inverted disabled text area"
          description="Description of inverted disabled text field"
          placeholder="Type a message here"
        />
      </div>
    </>
  );
}

export default Story;
