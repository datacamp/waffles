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
      <Avatar variant="green" />
      <Avatar variant="navy" />
      <Avatar variant="white" />
      <Avatar variant="red" />
      <Avatar variant="orange" />
      <Avatar variant="yellow" />
      <Avatar variant="blue" />
      <Avatar variant="purple" />
      <Avatar variant="pink" />
      <Avatar variant="grey" />
      <Avatar variant="greySubtle" />
    </div>
  );
}

export default Example;
