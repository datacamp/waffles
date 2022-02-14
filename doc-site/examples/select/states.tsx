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
      <Select disabled aria-label="Disabled select">
        <option>First option</option>
        <option>Second option</option>
      </Select>
      <Select error aria-label="Select in error state">
        <option>First option</option>
        <option>Second option</option>
      </Select>
    </div>
  );
}

export default Example;
