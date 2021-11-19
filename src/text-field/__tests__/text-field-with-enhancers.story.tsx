import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { CrossCircle, Branch } from '../../icon';
import { TextField } from '../index';

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
            <TextField
              key={`icon-left-${size}`}
              label="Text field with icon left and enhancer right"
              iconLeft={<Branch />}
              enhancerRight={
                <TextField.Enhancer aria-label="Clear">
                  <CrossCircle />
                </TextField.Enhancer>
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
            <TextField
              key={`icon-right-${size}`}
              inverted
              label="Inverted text field with icon left and enhancer right"
              iconLeft={<Branch />}
              enhancerRight={
                <TextField.Enhancer aria-label="Clear">
                  <CrossCircle />
                </TextField.Enhancer>
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
