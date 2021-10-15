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
      <Heading size="xxlarge">
        Learn the data skills you need online at your own pace
      </Heading>
      <Heading size="xlarge">
        Learn the data skills you need online at your own pace
      </Heading>
      <Heading size="large">
        Learn the data skills you need online at your own pace
      </Heading>
      <Heading size="medium">
        Learn the data skills you need online at your own pace
      </Heading>
    </div>
  );
}

export default Example;
