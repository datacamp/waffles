import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { hexToRgba } from '../../utils';
import { ContentContainer } from '../index';

const containerStyle = css`
  background-color: ${hexToRgba(tokens.colors.navy, tokens.opacity.medium)};
`;

const textStyle = css`
  color: ${tokens.colors.navy};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.relaxed};
  background-color: ${tokens.colors.orange};
  margin: 0;
`;

function Story() {
  return (
    <ContentContainer css={containerStyle} data-testid="container">
      <p css={textStyle}>Short content</p>
    </ContentContainer>
  );
}

export default Story;
