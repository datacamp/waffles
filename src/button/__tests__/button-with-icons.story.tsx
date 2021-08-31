import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { AddCircle, ChevronLeft, ChevronRight } from '../../icon';
import { Button } from '../index';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const variants = ['primary', 'secondary', 'plain', 'destructive'] as const;
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
                    key={`only-icon-${variant}-${size}`}
                    icon={AddCircle}
                    variant={variant}
                    size={size}
                    aria-label="Only icon"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`icon-left-${variant}-${size}`}
                    iconLeft={ChevronLeft}
                    variant={variant}
                    size={size}
                  >
                    Icon Left
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`icon-right-${variant}-${size}`}
                    iconRight={ChevronRight}
                    variant={variant}
                    size={size}
                  >
                    Icon Right
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`icon-left-and-right-${variant}-${size}`}
                    iconRight={AddCircle}
                    iconLeft={ChevronLeft}
                    variant={variant}
                    size={size}
                  >
                    Icon Left and Right
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
