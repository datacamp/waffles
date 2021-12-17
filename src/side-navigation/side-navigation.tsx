import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';
import Link from './link';
import Category from './category';
import Subcategory from './subcategory';

const sidebarStyle = css`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 230px;
  min-width: 230px;
  height: 100%;
  background-color: ${tokens.colors.navy};
  padding-bottom: ${tokens.spacing.large};
`;

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

type SideNavigationProps = {
  children: React.ReactNode;
};

function SideNavigation({ children }: SideNavigationProps) {
  return (
    <div css={sidebarStyle}>
      <nav>
        <ul css={listStyle}>{children}</ul>
      </nav>
    </div>
  );
}

SideNavigation.Link = Link;
SideNavigation.Category = Category;
SideNavigation.Subcategory = Subcategory;

export default SideNavigation;
