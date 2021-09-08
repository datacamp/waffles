import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Link } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customLinkStyle = css`
  color: ${tokens.colors.navy};
  background-color: ${tokens.colors.greenLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{' '}
        <Link css={customLinkStyle} href="https://datacamp.com">
          Go to DataCamp website
        </Link>{' '}
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
    </div>
  );
}

export default Story;
