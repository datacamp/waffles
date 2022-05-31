import { css } from '@emotion/react';

import { TextArea } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
  padding: ${tokens.spacing.medium};
`;

const sizes = ['small', 'medium', 'large'] as const;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <TextArea
              key={`textarea-${size}`}
              size={size}
              placeholder={`Text area of ${size} size`}
            />
          );
        })}
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        {sizes.map((size) => {
          return (
            <TextArea
              key={`textarea-${size}`}
              size={size}
              placeholder={`Inverted text area of ${size} size`}
              inverted
            />
          );
        })}
      </div>
    </>
  );
}

export default Story;
