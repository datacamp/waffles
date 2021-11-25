import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { CrossCircle, Branch } from '../../icon';
import { InputField } from '../index';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.medium};
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
              key={`icon-left-${size}`}
              label="Input field with icon left and enhancer right"
              iconLeft={<Branch />}
              enhancerRight={
                <InputField.Enhancer aria-label="Clear">
                  <CrossCircle />
                </InputField.Enhancer>
              }
              size={size}
              placeholder={`Input with left icon`}
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
              key={`icon-right-${size}`}
              inverted
              label="Inverted input field with icon left and enhancer right"
              iconLeft={<Branch />}
              enhancerRight={
                <InputField.Enhancer aria-label="Clear">
                  <CrossCircle />
                </InputField.Enhancer>
              }
              size={size}
              placeholder={`Input with right icon`}
            />
          );
        })}
      </div>
    </>
  );
}

export default Story;
