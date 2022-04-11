import React from 'react';

import { useMediaQuery } from '../hooks';
import Sidebar from './sidebar';
import AnimatedSidebar from './animated-sidebar';
import { SidebarProvider } from './sidebar-context';

type SideNavigationProps = {
  /* Determines if the side navigation sidebar is open. */
  isOpen: boolean;
  /* Handler called when the sidebar will close. */
  onClose: () => void;
  /* Content of the sidebar, either `SideNavigation.Nav` or custom components. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function SideNavigationInternal({
  isOpen,
  onClose,
  children,
  ...restProps
}: SideNavigationProps) {
  const { isAboveMedium } = useMediaQuery();

  // Render regular sidebar for all viewport sizes above medium breakpoint
  if (isAboveMedium) {
    return <Sidebar {...restProps}>{children}</Sidebar>;
  }

  // Render mobile sidebar, and pass isOpen and onClose to nested children
  return (
    <SidebarProvider {...{ isOpen, onClose }}>
      <AnimatedSidebar {...restProps}>{children}</AnimatedSidebar>
    </SidebarProvider>
  );
}

export default SideNavigationInternal;
