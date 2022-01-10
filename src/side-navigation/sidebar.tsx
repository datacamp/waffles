import React from 'react';

import { sidebarStyle } from './styles';

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

function Sidebar(props: SidebarProps) {
  return <div {...props} css={sidebarStyle()} />;
}

export default Sidebar;
