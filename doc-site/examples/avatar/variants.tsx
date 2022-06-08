import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Avatar } from '@datacamp/waffles/avatar';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        flex-wrap: wrap;
      `}
    >
      <Avatar variant="green" content="D" />
      <Avatar variant="navy" content="D" />
      <Avatar variant="white" content="D" />
      <Avatar variant="red" content="D" />
      <Avatar variant="orange" content="D" />
      <Avatar variant="yellow" content="D" />
      <Avatar variant="blue" content="D" />
      <Avatar variant="purple" content="D" />
      <Avatar variant="pink" content="D" />
      <Avatar variant="grey" content="D" />
      <Avatar variant="greySubtle" content="D" />
    </div>
  );
}

export default Example;
