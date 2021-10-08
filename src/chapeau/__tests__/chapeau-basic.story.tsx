import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Heading } from '../../heading';
import { Chapeau } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      <section css={wrapperStyle}>
        <header>
          <Chapeau>Short title above heading</Chapeau>
          <Heading size="xxlarge">Most important page heading</Heading>
        </header>
      </section>
      <section
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <header>
          <Chapeau inverted>Short title above heading inverted</Chapeau>
          <Heading size="xxlarge" inverted>
            Most important page heading inverted
          </Heading>
        </header>
      </section>
    </>
  );
}

export default Story;
