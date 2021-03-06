/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { TextArea } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <TextArea
        aria-label="Text area with error"
        error
        value="Invalid value"
        onChange={() => {}}
        rows={3}
      />
    </div>
  );
}

export default Story;
