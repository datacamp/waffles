import React from 'react';

import { useMediaQuery } from '../hooks';
import Nav from './nav';
import Item from './item';
import Category from './category';
import Subcategory from './subcategory';
import CloseButton from './close-button';
import { sidebarStyle, overlayStyle } from './styles';

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
    return (
      <div {...restProps} css={sidebarStyle()}>
        {children}
      </div>
    );
  }

  return isOpen ? (
    <>
      <div css={overlayStyle()} onClick={onClose} />
      <CloseButton onClick={onClose} />
      <div {...restProps} css={sidebarStyle()}>
        {children}
      </div>
    </>
  ) : null;
}

SideNavigation.Nav = Nav;
SideNavigation.Item = Item;
SideNavigation.Category = Category;
SideNavigation.Subcategory = Subcategory;

export default SideNavigation;
