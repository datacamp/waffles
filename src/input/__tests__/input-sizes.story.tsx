import { css } from '@emotion/react';

import { Input } from '../index';
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
            <Input
              key={`input-${size}`}
              size={size}
              placeholder={`Input of ${size} size`}
            />
          );
        })}
      </div>
      {/* Regular disabled */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Input
              disabled
              key={`input-${size}`}
              size={size}
              placeholder={`Input of ${size} size`}
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
            <Input
              key={`input-${size}`}
              size={size}
              placeholder={`Inverted input of ${size} size`}
              inverted
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
            <Input
              disabled
              key={`input-${size}`}
              size={size}
              placeholder={`Inverted input of ${size} size`}
              inverted
            />
          );
        })}
      </div>
    </>
  );
}

export default Story;
