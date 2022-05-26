import { Love3d } from '@datacamp/waffles/asset';
import { tokens } from '@datacamp/waffles/tokens';
import { css } from '@emotion/react';

function Example() {
  return (
    <div
      css={css`
        color: ${tokens.colors.navy};
        width: 300px;
      `}
    >
      <Love3d />
    </div>
  );
}

export default Example;
