import React from 'react';

import Nav from './nav';
import Item from './item';
import Category from './category';
import Subcategory from './subcategory';
import { sidebarStyle } from './styles';

type SideNavigationProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function SideNavigation({ children, ...restProps }: SideNavigationProps) {
  return (
    <div {...restProps} css={sidebarStyle()}>
      {children}
    </div>
  );
}

SideNavigation.Nav = Nav;
SideNavigation.Item = Item;
SideNavigation.Category = Category;
SideNavigation.Subcategory = Subcategory;

export default SideNavigation;
