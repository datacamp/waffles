import { css } from '@emotion/react';

import { Loader } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  background-color: ${tokens.colors.navy};
  padding: ${tokens.spacing.medium};
  width: 200px;
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Loader inverted />
    </div>
  );
}

export default Story;
