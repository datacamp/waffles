/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Select } from '../index';

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
            <Select
              key={`select-${size}`}
              aria-label={`Regular ${size} select`}
              value="python"
              size={size}
              onChange={() => {}}
            >
              <option value="python">Python</option>
              <option value="sql">SQL</option>
            </Select>
          );
        })}
      </div>
      {/* Regular disabled */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Select
              disabled
              key={`select-${size}-disabled`}
              aria-label={`Regular ${size} disabled select`}
              value="python"
              size={size}
              onChange={() => {}}
            >
              <option value="python">Python</option>
              <option value="sql">SQL</option>
            </Select>
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
            <Select
              inverted
              key={`select-${size}-inverted`}
              aria-label={`Inverted ${size} select`}
              value="python"
              size={size}
              onChange={() => {}}
            >
              <option value="python">Python</option>
              <option value="sql">SQL</option>
            </Select>
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
            <Select
              inverted
              disabled
              key={`select-${size}-inverted-disabled`}
              aria-label={`Inverted ${size} disabled select`}
              value="python"
              size={size}
              onChange={() => {}}
            >
              <option value="python">Python</option>
              <option value="sql">SQL</option>
            </Select>
          );
        })}
      </div>
    </>
  );
}

export default Story;
