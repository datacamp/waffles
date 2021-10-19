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
      <Paragraph size="large">
        You can install Waffles components library by running{' '}
        <Code size="large">npm install @datacamp/waffles</Code> with npm or{' '}
        <Code size="large">yarn add @datacamp/waffles</Code> with yarn.
      </Paragraph>
      <Paragraph size="medium">
        You can install Waffles components library by running{' '}
        <Code size="medium">npm install @datacamp/waffles</Code> with npm or{' '}
        <Code size="medium">yarn add @datacamp/waffles</Code> with yarn.
      </Paragraph>
    </div>
  );
}

export default Example;
