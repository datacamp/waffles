import React from 'react';

import { useMediaQuery } from '../hooks';
import Nav from './nav';
import Item from './item';
import Category from './category';
import Subcategory from './subcategory';
import CloseButton from './close-button';
import Sidebar from './sidebar';
import Overlay from './overlay';

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

  if (isSmall) {
    return <Sidebar {...restProps}>{children}</Sidebar>;
  }

  return isOpen ? (
    <>
      <Overlay onClick={onClose} />
      <CloseButton onClick={onClose} />
      <Sidebar {...restProps}>{children}</Sidebar>
    </>
  ) : null;
}

SideNavigation.Nav = Nav;
SideNavigation.Item = Item;
SideNavigation.Category = Category;
SideNavigation.Subcategory = Subcategory;

export default SideNavigation;
