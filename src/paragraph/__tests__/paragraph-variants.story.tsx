import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Paragraph } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const variants = ['primary', 'secondary'] as const;

const testText1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const testText2 =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        {variants.map((variant, index) => {
          return (
            <>
              <Paragraph key={`variant-${index}`} variant={variant}>
                {testText1}
              </Paragraph>
              <Paragraph key={`variant-${index}`} variant={variant}>
                {testText2}
              </Paragraph>
            </>
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
        {variants.map((variant, index) => {
          return (
            <>
              <Paragraph
                key={`inverted-variant-${index}`}
                variant={variant}
                inverted
              >
                {testText1}
              </Paragraph>
              <Paragraph
                key={`inverted-variant-${index}`}
                variant={variant}
                inverted
              >
                {testText2}
              </Paragraph>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Story;
