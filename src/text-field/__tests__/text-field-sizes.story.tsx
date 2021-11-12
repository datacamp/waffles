import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextField } from '../index';

const wrapperStyle = css`
  display: flex;
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
            <TextField
              label="Regular text field"
              description="Description of regular text field"
              key={`text-field-${size}`}
              size={size}
              placeholder={`Text field of ${size} size`}
            />
          );
        })}
      </div>
      {/* Regular disabled */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <TextField
              disabled
              label="Disabled regular text field"
              description="Description of regular text field"
              key={`text-field-${size}`}
              size={size}
              placeholder={`Disabled text field of ${size} size`}
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
            <TextField
              inverted
              label="Inverted text field"
              description="Description of inverted text field"
              key={`text-field-${size}`}
              size={size}
              placeholder={`Inverted text field of ${size} size`}
            />
          );
        })}
      </div>
      {/* Inverted disabled */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        {sizes.map((size) => {
          return (
            <TextField
              inverted
              disabled
              label="Inverted disabled regular text field"
              description="Description of inverted disabled text field"
              key={`text-field-${size}`}
              size={size}
              placeholder={`Inverted disabled text field of ${size} size`}
            />
          );
        })}
      </div>
    </>
  );
}

export default Story;
