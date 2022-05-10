import { css } from '@emotion/react';

import { CodeBlock } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const sizes = ['medium', 'large'] as const;

const preformattedCodeExample = `pyftsubset JetBrainsMono.ttf
 --output-file="JetBrainsMono.woff"
 --flavor=woff
 --with-zopfli
 --layout-features="kern,liga,clig,ccmp"
 --unicodes="*"`;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <CodeBlock key={size} size={size}>
              {preformattedCodeExample}
            </CodeBlock>
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
            <CodeBlock key={size} inverted size={size}>
              {preformattedCodeExample}
            </CodeBlock>
          );
        })}
      </div>
    </>
  );
}

export default Story;
