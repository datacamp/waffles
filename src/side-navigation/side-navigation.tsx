import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';

const sidebarStyle = css`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 230px
  min-width: 230px;
  background-color: ${tokens.colors.navy};
`;

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

type SidebarProps = {
  children: React.ReactNode;
};

function SideNavigation({ children }: SidebarProps) {
  return (
    <div css={sidebarStyle}>
      <nav>
        <ul css={listStyle}>{children}</ul>
      </nav>
    </div>
  );
}

export default SideNavigation;
