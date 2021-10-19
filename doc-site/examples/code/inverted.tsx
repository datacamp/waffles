import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Code } from '@datacamp/waffles/code';
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
      <Paragraph inverted size="large">
        You can install Waffles components library by running{' '}
        <Code inverted size="large">
          npm install @datacamp/waffles
        </Code>{' '}
        with npm or{' '}
        <Code inverted size="large">
          yarn add @datacamp/waffles
        </Code>{' '}
        with yarn.
      </Paragraph>
      <Paragraph inverted>
        You can install Waffles components library by running{' '}
        <Code inverted>npm install @datacamp/waffles</Code> with npm or{' '}
        <Code inverted>yarn add @datacamp/waffles</Code> with yarn.
      </Paragraph>
    </div>
  );
}

export default Example;
