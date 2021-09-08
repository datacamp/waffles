import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Code } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const sizes = ['medium', 'large'] as const;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Paragraph key={size}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{' '}
              <Code
                size={size}
              >{`inline code fragment of the ${size} size`}</Code>{' '}
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
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
            <Paragraph inverted key={size}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{' '}
              <Code
                inverted
                size={size}
              >{`inline inverted style code fragment of the ${size} size`}</Code>{' '}
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          );
        })}
      </div>
    </>
  );
}

export default Story;
