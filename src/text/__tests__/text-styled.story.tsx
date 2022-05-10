import { css } from '@emotion/react';

import { Text } from '../index';
import { tokens } from '../../tokens';

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
