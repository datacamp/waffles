import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { TextArea } from '@datacamp/waffles/text-area';

function Example() {
  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <TextArea disabled label="Disabled text area" placeholder="Disabled" />
      <TextArea
        error="Error message"
        label="Text area in error state"
        placeholder="Error"
      />
    </form>
  );
}

export default Example;
