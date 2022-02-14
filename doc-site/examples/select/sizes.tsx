import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Select } from '@datacamp/waffles/select';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <Select size="large" aria-label="Large select">
        <option>First option</option>
        <option>Second option</option>
      </Select>
      <Select size="medium" aria-label="Medium select">
        <option>First option</option>
        <option>Second option</option>
      </Select>
      <Select size="small" aria-label="Small select">
        <option>First option</option>
        <option>Second option</option>
      </Select>
    </div>
  );
}

export default Example;
