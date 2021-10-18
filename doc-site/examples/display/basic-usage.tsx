import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Display } from '@datacamp/waffles/display';

function Example() {
  return (
    <Display>
      We are bold.
      <br />
      We are{' '}
      <span
        css={css`
          color: ${tokens.colors.purple};
        `}
      >
        colorful
      </span>
      .
    </Display>
  );
}

export default Example;
