import { css } from '@emotion/react';

import { Notification } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Notification
        title="Basic Notification Title"
        description="Basic notification description."
        closable
      />
    </div>
  );
}

export default Story;
