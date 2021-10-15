import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Heading } from '@datacamp/waffles/heading';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
      `}
    >
      <Heading size="xxlarge" inverted>
        Start your own data analysis in seconds
      </Heading>
      <Heading size="xlarge" inverted>
        Start your own data analysis in seconds
      </Heading>
      <Heading size="large" inverted>
        Start your own data analysis in seconds
      </Heading>
      <Heading size="medium" inverted>
        Start your own data analysis in seconds
      </Heading>
    </div>
  );
}

export default Example;
