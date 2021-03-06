import { css } from '@emotion/react';

import { Chapeau } from '../index';
import { tokens } from '../../tokens';
import { Heading } from '../../heading';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const chapeauStyle = css`
  color: ${tokens.colors.greenDarkText};
`;

function Story() {
  return (
    <section css={wrapperStyle}>
      <header>
        <Chapeau css={chapeauStyle}>Chapeau with custom styles</Chapeau>
        <Heading size="xxlarge">Most important page heading</Heading>
      </header>
    </section>
  );
}

export default Story;
