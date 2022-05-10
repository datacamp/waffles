import { css } from '@emotion/react';

import { Paragraph } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};

  &:not(:first-of-type) {
    padding-top: 0;
  }
`;

const variants = ['primary', 'secondary'] as const;
const sizes = ['small', 'medium', 'large'] as const;

const testText1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const testText2 =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';

function Story() {
  return (
    <>
      {/* Regular */}
      <div>
        {variants.map((variant) => {
          return sizes.map((size) => {
            return (
              <div key={variant} css={wrapperStyle}>
                <Paragraph variant={variant} size={size}>
                  {testText1}
                </Paragraph>
                <Paragraph variant={variant} size={size}>
                  {testText2}
                </Paragraph>
              </div>
            );
          });
        })}
      </div>
      {/* Inverted */}
      <div>
        {variants.map((variant) => {
          return sizes.map((size) => {
            return (
              <div
                key={`inverted-${variant}`}
                css={css`
                  ${wrapperStyle}
                  background-color: ${tokens.colors.navy};
                `}
              >
                <Paragraph variant={variant} size={size} inverted>
                  {testText1}
                </Paragraph>
                <Paragraph variant={variant} size={size} inverted>
                  {testText2}
                </Paragraph>
              </div>
            );
          });
        })}
      </div>
    </>
  );
}

export default Story;
