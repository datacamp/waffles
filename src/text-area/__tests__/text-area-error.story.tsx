/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextArea } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <TextArea
        label="Text area with error"
        error="Provide correct value."
        value="Invalid value"
        onChange={() => {}}
        rows={3}
      />
    </div>
  );
}

export default Story;
