import { css } from '@emotion/react';

import { Button } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const variants = [
  'primary',
  'secondary',
  'plain',
  'destructive',
  'upgrade',
] as const;
const sizes = ['small', 'medium', 'large'] as const;

function Story() {
  return (
    <>
      {/* Regular */}
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`${variant}-${size}`}
                    variant={variant}
                    size={size}
                  >
                    Regular
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* Regular disabled */}
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    disabled
                    key={`disabled-${variant}-${size}`}
                    variant={variant}
                    size={size}
                  >
                    Disabled
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Regular isLoading */}
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    isLoading
                    key={`loading-${variant}-${size}`}
                    variant={variant}
                    size={size}
                  >
                    Loading
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* Inverted */}
      <div
        css={css`
          background-color: ${tokens.colors.navy};
        `}
      >
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    inverted
                    key={`inverted-${variant}-${size}`}
                    variant={variant}
                    size={size}
                  >
                    Inverted
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* Inverted disabled */}
      <div
        css={css`
          background-color: ${tokens.colors.navy};
        `}
      >
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    inverted
                    disabled
                    key={`inverted-disabled-${variant}-${size}`}
                    variant={variant}
                    size={size}
                  >
                    Inverted Disabled
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* Inverted isLoading */}
      <div
        css={css`
          background-color: ${tokens.colors.navy};
        `}
      >
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    isLoading
                    inverted
                    key={`inverted-loading-${variant}-${size}`}
                    variant={variant}
                    size={size}
                  >
                    Inverted Loading
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Story;
