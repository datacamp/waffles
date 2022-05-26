import { DoubleArrow3d } from '@datacamp/waffles/asset';
import { tokens } from '@datacamp/waffles/tokens';
import { css } from '@emotion/react';

function Example() {
  return (
    <div
      css={css`
        color: ${tokens.colors.greyDark};
      `}
    >
      <DoubleArrow3d width="200" />
    </div>
  );
}

export default Example;
