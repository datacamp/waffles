import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Badge } from '@datacamp/waffles/badge';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        flex-wrap: wrap;
      `}
    >
      <Badge variant="green">Label</Badge>
      <Badge variant="navy">Label</Badge>
      <Badge variant="white">Label</Badge>
      <Badge variant="red">Label</Badge>
      <Badge variant="orange">Label</Badge>
      <Badge variant="yellow">Label</Badge>
      <Badge variant="blue">Label</Badge>
      <Badge variant="purple">Label</Badge>
      <Badge variant="pink">Label</Badge>
      <Badge variant="grey">Label</Badge>
      <Badge variant="greySubtle">Label</Badge>
    </div>
  );
}

export default Example;
