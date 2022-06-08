import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Avatar } from '@datacamp/waffles/avatar';

function Example() {
  return (
    <>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          margin-bottom: ${tokens.spacing.small};
        `}
      >
        <Avatar variant="green" size="large" />
        <Avatar variant="purple" size="medium" />
        <Avatar variant="navy" size="small" />
      </div>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
        `}
      >
        <Avatar variant="green" size="large" />
        <Avatar variant="purple" size="medium" />
        <Avatar variant="navy" size="small" />
      </div>
    </>
  );
}

export default Example;
