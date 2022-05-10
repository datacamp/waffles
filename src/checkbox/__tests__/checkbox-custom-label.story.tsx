/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Checkbox } from '../index';
import { tokens } from '../../tokens';
import { Link } from '../../link';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Checkbox checked={false} onChange={() => {}}>
        I accept{' '}
        <Link href="https://www.datacamp.com/terms-of-use">Terms of Use</Link>{' '}
        and{' '}
        <Link href="https://www.datacamp.com/privacy-policy">
          Privacy Policy
        </Link>
      </Checkbox>
    </div>
  );
}

export default Story;
