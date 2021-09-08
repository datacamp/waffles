import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Link } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, <Link href="https://datacamp.com">Go to DataCamp website</Link>{' '}
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
    </div>
  );
}

export default Story;
