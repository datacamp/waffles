import React from 'react';

import { subsectionStyle } from './styles';

type SubsectionProps = {
  children: React.ReactNode;
  width?: number;
  isLast?: boolean;
};

function Subsection({ children, width, isLast = false }: SubsectionProps) {
  return <div css={subsectionStyle({ width, isLast })}>{children}</div>;
}

export default Subsection;
