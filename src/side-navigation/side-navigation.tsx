import React from 'react';

import { useMediaQuery } from '../hooks';
import Nav from './nav';
import Item from './item';
import Category from './category';
import Subcategory from './subcategory';
import Sidebar from './sidebar';
import AnimatedSidebar from './animated-sidebar';

type SideNavigationProps = {
  isOpen: boolean;
  onClose: React.MouseEventHandler;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function SideNavigation({
  isOpen,
  onClose,
  children,
  ...restProps
}: SideNavigationProps) {
  const { isSmall } = useMediaQuery();

  // Render appropriate sidebar for all viewport sizes above small breakpoint
  if (isSmall) {
    return <Sidebar {...restProps}>{children}</Sidebar>;
  }

  // Render mobile sidebar
  return (
    <AnimatedSidebar {...{ isOpen, onClose }} {...restProps}>
      {children}
    </AnimatedSidebar>
  );
}

SideNavigation.Nav = Nav;
SideNavigation.Item = Item;
SideNavigation.Category = Category;
SideNavigation.Subcategory = Subcategory;

export default SideNavigation;
