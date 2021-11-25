import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { InputField } from '../index';

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
            <InputField
              label="Regular input field"
              description="Description of regular input field"
              key={`input-field-${size}`}
              size={size}
              placeholder={`Input field of ${size} size`}
            />
          );
        })}
      </div>
      {/* Regular disabled */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <InputField
              disabled
              label="Disabled regular input field"
              description="Description of regular input field"
              key={`input-field-${size}`}
              size={size}
              placeholder={`Disabled input field of ${size} size`}
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
            <InputField
              inverted
              label="Inverted input field"
              description="Description of inverted input field"
              key={`input-field-${size}`}
              size={size}
              placeholder={`Inverted input field of ${size} size`}
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
            <InputField
              inverted
              disabled
              label="Inverted disabled regular input field"
              description="Description of inverted disabled input field"
              key={`input-field-${size}`}
              size={size}
              placeholder={`Inverted disabled input field of ${size} size`}
            />
          );
        })}
      </div>
    </>
  );
}

export default Story;
