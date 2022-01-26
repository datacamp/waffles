import React from 'react';

import { bodyStyle } from './styles';

type BodyProps = {
  children: React.ReactNode;
};

function Body({ children }: BodyProps) {
  return <div css={bodyStyle()}>{children}</div>;
}

export default Body;
