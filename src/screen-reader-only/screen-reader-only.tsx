import React from 'react';

import { screenReaderOnlyStyle } from './styles';

type ScreenReaderOnlyProps = {
  /* Content to hide visually. */
  children: React.ReactNode;
};

function ScreenReaderOnly({ children }: ScreenReaderOnlyProps) {
  return <span css={screenReaderOnlyStyle()}>{children}</span>;
}

export default ScreenReaderOnly;
