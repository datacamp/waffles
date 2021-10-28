import React from 'react';

import { screenReaderOnlyStyle } from './styles';

type ScreenReaderOnlyProps = {
  children: React.ReactNode;
};

function ScreenReaderOnly({ children }: ScreenReaderOnlyProps) {
  return <span css={screenReaderOnlyStyle()}>{children}</span>;
}

export default ScreenReaderOnly;
