import React from 'react';

import Item from './item';
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

SideNavigation.Item = Item;
SideNavigation.Category = Category;
SideNavigation.Subcategory = Subcategory;

export default SideNavigation;
