import { css } from '@emotion/react';

import { FormField } from '../index';
import { tokens } from '../../tokens';
import { Input } from '../../input';

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
            <FormField
              key={`form-field-${size}`}
              size={size}
              label="Regular form field"
              description="Description of regular form field"
            >
              <Input placeholder={`Input of ${size} size`} />
            </FormField>
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
            <FormField
              key={`form-field-${size}`}
              size={size}
              inverted
              label="Inverted form field"
              description="Description of inverted form field"
            >
              <Input placeholder={`Inverted input of ${size} size`} />
            </FormField>
          );
        })}
      </div>
    </>
  );
}

export default Story;
