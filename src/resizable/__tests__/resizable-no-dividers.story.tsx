import { css } from '@emotion/react';

import { Resizable } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { hexToRgba } from '../../helpers';

const wrapperStyle = css`
  width: 100%;
  height: 100vh;
  background-color: ${tokens.colors.beigeLight};
`;

const paragraphStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Resizable defaultProportions={[50, 30, 20]} layout="column">
        <Paragraph css={paragraphStyle}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Paragraph
          css={css`
            ${paragraphStyle}
            background-color: ${hexToRgba(tokens.colors.navy, 0.05)};
            height: 100%;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Paragraph
          css={css`
            ${paragraphStyle}
            background-color: ${hexToRgba(tokens.colors.navy, 0.1)};
            height: 100%;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Resizable>
    </div>
  );
}

export default Story;
