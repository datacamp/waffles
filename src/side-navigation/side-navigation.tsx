import React from 'react';

import Link from './link';
import Category from './category';
import Subcategory from './subcategory';
import { listStyle, sidebarStyle } from './styles';

type SideNavigationProps = {
  children: React.ReactNode;
};

function SideNavigation({ children }: SideNavigationProps) {
  return (
    <div css={sidebarStyle()}>
      <nav>
        <ul css={listStyle()}>{children}</ul>
      </nav>
    </div>
  );
}

SideNavigation.Link = Link;
SideNavigation.Category = Category;
SideNavigation.Subcategory = Subcategory;

export default SideNavigation;
