import { css } from '@emotion/react';

import { Heading } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const sizes = ['xxlarge', 'xlarge', 'large', 'medium'] as const;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Heading key={size} size={size}>{`Heading size ${size}`}</Heading>
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
            <Heading
              key={size}
              size={size}
              inverted
            >{`Heading size ${size} inverted`}</Heading>
          );
        })}
      </div>
    </>
  );
}

export default Story;
