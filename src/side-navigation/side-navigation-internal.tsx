import React from 'react';

import { useMediaQuery } from '../hooks';
import Sidebar from './sidebar';
import AnimatedSidebar from './animated-sidebar';
import { SidebarProvider } from './sidebar-context';

type SideNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function SideNavigationInternal({
  isOpen,
  onClose,
  children,
  ...restProps
}: SideNavigationProps) {
  const { isSmall } = useMediaQuery();

  // Render regular sidebar for all viewport sizes above small breakpoint
  if (isSmall) {
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
