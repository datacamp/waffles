import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';

import { Text } from '@datacamp/waffles/text';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { SIDEBAR_WIDTH } from './constants';

const sidebarStyle = css`
  display: grid;
  grid-template-rows: 1fr auto;
  width: ${SIDEBAR_WIDTH};
  min-width: ${SIDEBAR_WIDTH};
  background-color: ${tokens.colors.navy};
`;

const copyrightStyle = css`
  color: ${hexToRgba(tokens.colors.navySubtleTextOnDark, tokens.opacity.high)};
  font-size: ${tokens.fontSizes.small};
  padding: ${tokens.spacing.medium};
  padding-top: 48px;
  user-select: none;
`;

type SidebarProps = {
  children: React.ReactNode;
};

function Sidebar({ children }: SidebarProps) {
  return (
    <div css={sidebarStyle}>
      {children}
      <Text as="small" css={copyrightStyle}>
        © 2021 DataCamp, Inc.
      </Text>
    </div>
  );
}

export default Sidebar;
