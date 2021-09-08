import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Text } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customTextStyle = css`
  color: ${tokens.colors.red};
  font-size: ${tokens.fontSizes.xlarge};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Text css={customTextStyle}>Custom style text</Text>
    </div>
  );
}

export default Story;
