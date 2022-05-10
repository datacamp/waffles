import { css } from '@emotion/react';

import { Input } from '../index';
import { tokens } from '../../tokens';
import { CrossCircle, Branch, ChevronRight } from '../../icon';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const sizes = ['small', 'medium', 'large'] as const;

function Story() {
  return (
    <>
      {/* Icon left */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Input
              key={`icon-left-${size}`}
              iconLeft={<Branch />}
              size={size}
              placeholder={`Input with left icon`}
            />
          );
        })}
      </div>
      {/* Icon right */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Input
              key={`icon-right-${size}`}
              enhancerRight={<ChevronRight />}
              size={size}
              placeholder={`Input with right icon`}
            />
          );
        })}
      </div>
      {/* Enhancer right */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Input
              key={`enhancer-right-${size}`}
              enhancerRight={
                <Input.Enhancer aria-label="Clear">
                  <CrossCircle />
                </Input.Enhancer>
              }
              size={size}
              placeholder={`Input with enhancer`}
            />
          );
        })}
      </div>
      {/* Icon left and enhancer right */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Input
              key={`icon-and-enhancer-${size}`}
              iconLeft={<Branch />}
              enhancerRight={
                <Input.Enhancer aria-label="Clear">
                  <CrossCircle />
                </Input.Enhancer>
              }
              size={size}
              placeholder={`Input with both enhancers`}
            />
          );
        })}
      </div>
      {/* Icon left and enhancer right disabled */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Input
              disabled
              key={`icon-and-enhancer-${size}`}
              iconLeft={<Branch />}
              enhancerRight={
                <Input.Enhancer aria-label="Clear">
                  <CrossCircle />
                </Input.Enhancer>
              }
              size={size}
              placeholder={`Disabled input with both enhancers`}
            />
          );
        })}
      </div>
      {/* Both enhancers inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Input
          inverted
          iconLeft={<Branch />}
          enhancerRight={
            <Input.Enhancer aria-label="Clear">
              <CrossCircle />
            </Input.Enhancer>
          }
          placeholder={`Both enhancers inverted`}
        />
        <Input
          inverted
          disabled
          iconLeft={<Branch />}
          enhancerRight={
            <Input.Enhancer aria-label="Clear">
              <CrossCircle />
            </Input.Enhancer>
          }
          placeholder={`Both enhancers inverted disabled`}
        />
      </div>
    </>
  );
}

export default Story;
