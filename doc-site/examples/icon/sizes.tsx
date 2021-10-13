import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { AddCircle } from '@datacamp/waffles/icon';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        color: ${tokens.colors.navy};
      `}
    >
      <AddCircle size="medium" />
      <AddCircle size="small" />
      <AddCircle size="xsmall" />
    </div>
  );
}

export default Example;
