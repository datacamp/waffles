import { css } from '@emotion/react';

import { Button } from '../index';
import { tokens } from '../../tokens';
import { AddCircle, ChevronLeft, ChevronRight } from '../../icon';

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
const iconSizes = ['xsmall', 'small', 'medium'] as const; // Omitting large, and xlarge, since it shouldn't be used in buttons

function Story() {
  return (
    <>
      {/* Icon only */}
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`only-icon-${variant}-${size}`}
                    icon={<AddCircle />}
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
      {/* Icon left */}
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`icon-left-${variant}-${size}`}
                    iconLeft={<ChevronLeft />}
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
      {/* Icon right */}
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`icon-right-${variant}-${size}`}
                    iconRight={<ChevronRight />}
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
      {/* Both icon left and right */}
      <div>
        {variants.map((variant) => {
          return (
            <div css={wrapperStyle} key={variant}>
              {sizes.map((size) => {
                return (
                  <Button
                    key={`icon-left-and-right-${variant}-${size}`}
                    iconRight={<AddCircle />}
                    iconLeft={<ChevronLeft />}
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
      {/* Custom icon size */}
      <div css={wrapperStyle}>
        {iconSizes.map((iconSize) => {
          return (
            <Button
              key={`custom-icon-${iconSize}`}
              iconLeft={<AddCircle size={iconSize} />}
            >
              Custom Icon Size
            </Button>
          );
        })}
      </div>
    </>
  );
}

export default Story;
