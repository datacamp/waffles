import { css } from '@emotion/react';

import { ScreenReaderOnly } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Link } from '../../link';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Paragraph>
        Ut enim ad minim veniam,{' '}
        <Link href="https://datacamp.com">
          Go to DataCamp website
          <ScreenReaderOnly>(external link)</ScreenReaderOnly>
        </Link>{' '}
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
    </div>
  );
}

export default Story;
