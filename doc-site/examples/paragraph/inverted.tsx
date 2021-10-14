import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
      `}
    >
      <Paragraph variant="primary" inverted>
        Gain the career-building Python skills you need to succeed as a data
        scientist. No prior coding experience required. In this track,
        you&apos;ll learn how this versatile language allows you to import,
        clean, manipulate, and visualize data—all integral skills for any
        aspiring data professional or researcher.
      </Paragraph>
      <Paragraph variant="secondary" inverted>
        Gain the career-building Python skills you need to succeed as a data
        scientist. No prior coding experience required. In this track,
        you&apos;ll learn how this versatile language allows you to import,
        clean, manipulate, and visualize data—all integral skills for any
        aspiring data professional or researcher.
      </Paragraph>
    </div>
  );
}

export default Example;
